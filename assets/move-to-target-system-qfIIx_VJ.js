var sM=Object.defineProperty;var hM=(ht,et,nt)=>et in ht?sM(ht,et,{enumerable:!0,configurable:!0,writable:!0,value:nt}):ht[et]=nt;var F=(ht,et,nt)=>(hM(ht,typeof et!="symbol"?et+"":et,nt),nt);(function(){"use strict";function ht(t,r){let e=t*t+r*r;return e>0?(e=1/Math.sqrt(e),{x:t*e,y:r*e}):{x:t,y:r}}const et=20,nt=32-et,ea=Math.pow(2,et),aa=Math.pow(2,nt);function ar(t,r=0){return Xr(Atomics.load(t,r))}function Ri(t,r=0){return Atomics.load(t,r)}function na(t,r=0,e,a){Atomics.store(t,r,sa(e,a))}function ia(t,r=0,e){Atomics.store(t,r,e)}function Li(t,r,e,a){return Atomics.compareExchange(t,r,a,e)===a}function Xr(t){return{bufferPosition:t&4095,bufferByteOffset:t>>>nt}}function sa(t,r){return t+(r<<nt)}class J{get bufferByteOffset(){return this.data.byteOffset}get pointer(){return sa(this.bufferPosition,this.bufferByteOffset)}constructor(r,e){this.memory=r,"buffer"in e?(this.data=e.data,this.buffer=e.buffer,this.bufferPosition=this.memory.buffers.indexOf(e.buffer)):(this.bufferPosition=e.bufferPosition,this.buffer=r.buffers[e.bufferPosition],this.data=new Uint32Array(this.buffer.buf,e.bufferByteOffset))}getArray(r,e,a){return new r(this.data.buffer,this.data.byteOffset+e*r.BYTES_PER_ELEMENT,a)}getArrayMemory(r,e){return{bufferPosition:this.bufferPosition,bufferByteOffset:this.bufferByteOffset+r*this.data.BYTES_PER_ELEMENT}}free(){this.buffer.free(this.data.byteOffset)}getSharedMemory(){return{bufferPosition:this.bufferPosition,bufferByteOffset:this.bufferByteOffset}}}const Zr=0,nr=1;function ha(t,r=0){for(;Atomics.compareExchange(t,r,Zr,nr)!==Zr;)"WorkerGlobalScope"in self&&Atomics.wait(t,r,nr)}function Lt(t,r=0){Atomics.compareExchange(t,r,nr,Zr)!==nr&&console.warn("We are unlocking when it was not locked!"),Atomics.notify(t,r)}const Gi={5120:"i8",5121:"u8",5122:"i16",5123:"u16",5124:"i32",5125:"u32",5126:"f32"},Bi={f32:Float32Array,f64:Float64Array},Fi={i8:Int8Array,i16:Int16Array,i32:Int32Array},Ni={u8:Uint8Array,u8c:Uint8ClampedArray,u16:Uint16Array,u32:Uint32Array},ki={i64:BigInt64Array,u64:BigUint64Array},Di={...Bi,...Fi,...Ni},Vi=t=>{const r=Gi[t];return r!==void 0?r:t};function Yi(t,...r){const e=ki[t];return new(e||Di[Vi(t)])(...r)}const va=0,oa=1,fa=2,ua=3,ya=4,wt=5,ca=6,qr=1,Hr=2,xa=8*4,Wr=0,Qr=1,it=2*4;class jr{constructor(r={}){if(this.buf=r.buf?r.buf:new ArrayBuffer(r.size||4096),this.start=r.start!=null?sr(Math.max(r.start,0),4):0,this.u8=new Uint8Array(this.buf),this.u32=new Uint32Array(this.buf),this.state=new Uint32Array(this.buf,this.start,xa/4),this.lock=new Int32Array(this.buf,this.start+this.state.byteLength-4,1),!r.skipInitialization){const e=r.align||8;if(e<8)throw new Error(`invalid alignment: ${e}, must be a pow2 and >= 8`);const a=this.initialTop(e),n=r.end!=null?Math.min(r.end,this.buf.byteLength):this.buf.byteLength;if(a>=n)throw new Error(`insufficient address range (0x${this.start.toString(16)} - 0x${n.toString(16)})`);this.align=e,this.doCompact=r.compact!==!1,this.doSplit=r.split!==!1,this.minSplit=r.minSplit||16,this.end=n,this.top=a,this._free=0,this._used=0}}stats(){const r=a=>{let n=0,i=0;for(;a;)if(n++,i+=this.blockSize(a),a=this.blockNext(a),a>this.end){console.error(`Trying to get stats for block past end of buffer: ${a} > ${this.end}`);break}return{count:n,size:i}},e=r(this._free);return{free:e,used:r(this._used),top:this.top,available:this.end-this.top+e.size,total:this.buf.byteLength}}callocAs(r,e,a=0){const n=this.mallocAs(r,e);return n&&n.fill(a),n}mallocAs(r,e){const a=this.malloc(e*Ui[r]);return a?Yi(r,this.buf,a,e):void 0}calloc(r,e=0){const a=this.malloc(r);return a&&this.u8.fill(e,a,a+r),a}malloc(r){if(r<=0)return 0;ha(this.lock);const e=sr(r+it,this.align),a=this.end;let n=this.top,i=this._free,s=0;for(;i;){const h=this.blockSize(i),v=i+h>=n;if(v||h>=e){let o=this.mallocTop(i,s,h,e,v);return Lt(this.lock),o}s=i,i=this.blockNext(i)}if(i=n,n=i+e,n<=a){this.initBlock(i,e,this._used),this._used=i,this.top=n;let h=Gt(i);return Lt(this.lock),h}return Lt(this.lock),0}mallocTop(r,e,a,n,i){if(i&&r+n>this.end)return 0;if(e?this.unlinkBlock(e,r):this._free=this.blockNext(r),this.setBlockNext(r,this._used),this._used=r,i)this.top=r+this.setBlockSize(r,n);else if(this.doSplit){const s=a-n;s>=this.minSplit&&this.splitBlock(r,n,s)}return Gt(r)}realloc(r,e){if(e<=0)return 0;const a=ir(r);let n=0,i=this._used,s=0;for(;i;){if(i===a){[n,s]=this.reallocBlock(i,e);break}i=this.blockNext(i)}return n&&n!==a&&this.u8.copyWithin(Gt(n),Gt(a),s),Gt(n)}reallocBlock(r,e){const a=this.blockSize(r),n=r+a,i=n>=this.top,s=sr(e+it,this.align);if(s<=a){if(this.doSplit){const h=a-s;h>=this.minSplit?this.splitBlock(r,s,h):i&&(this.top=r+s)}else i&&(this.top=r+s);return[r,n]}return i&&r+s<this.end?(this.top=r+this.setBlockSize(r,s),[r,n]):(this.free(r),[ir(this.malloc(e)),n])}reallocArray(r,e){if(r.buffer!==this.buf)return;const a=this.realloc(r.byteOffset,e*r.BYTES_PER_ELEMENT);return a?new r.constructor(this.buf,a,e):void 0}bytesFor(r){let e;if(typeof r!="number"){if(r.buffer!==this.buf)return;e=r.byteOffset}else e=r;e=ir(e);let a=this._used;for(;a;){if(a===e)return this.blockSize(e)-it;a=this.blockNext(a)}}lengthOf(r){let e=this.bytesFor(r);if(e)return e/this.u32.BYTES_PER_ELEMENT}free(r){let e;if(typeof r!="number"){if(r.buffer!==this.buf)return!1;e=r.byteOffset}else e=r;ha(this.lock),e=ir(e);let a=this._used,n=0;for(;a;){if(a===e)return n?this.unlinkBlock(n,a):this._used=this.blockNext(a),this.insert(a),this.doCompact&&this.compact(),Lt(this.lock),!0;n=a,a=this.blockNext(a)}return Lt(this.lock),!1}freeAll(){this._free=0,this._used=0,this.top=this.initialTop()}release(){return delete this.u8,delete this.u32,delete this.state,delete this.buf,!0}get align(){return this.state[ya]}set align(r){this.state[ya]=r}get end(){return this.state[ua]}set end(r){this.state[ua]=r}get top(){return Atomics.load(this.state,fa)}set top(r){Atomics.store(this.state,fa,r)}get _free(){return Atomics.load(this.state,va)}set _free(r){Atomics.store(this.state,va,r)}get _used(){return Atomics.load(this.state,oa)}set _used(r){Atomics.store(this.state,oa,r)}get doCompact(){return!!(this.state[wt]&qr)}set doCompact(r){r?this.state[wt]|=1<<qr-1:this.state[wt]&=~qr}get doSplit(){return!!(this.state[wt]&Hr)}set doSplit(r){r?this.state[wt]|=1<<Hr-1:this.state[wt]&=~Hr}get minSplit(){return this.state[ca]}set minSplit(r){if(r<=it)throw new Error(`illegal min split threshold: ${r}, require at least ${it+1}`);this.state[ca]=r}blockSize(r){return Atomics.load(this.u32,(r>>2)+Wr)}setBlockSize(r,e){return Atomics.store(this.u32,(r>>2)+Wr,e),e}blockNext(r){return Atomics.load(this.u32,(r>>2)+Qr)}setBlockNext(r,e){Atomics.store(this.u32,(r>>2)+Qr,e)}initBlock(r,e,a){const n=r>>>2;return Atomics.store(this.u32,n+Wr,e),Atomics.store(this.u32,n+Qr,a),r}unlinkBlock(r,e){this.setBlockNext(r,this.blockNext(e))}splitBlock(r,e,a){this.insert(this.initBlock(r+this.setBlockSize(r,e),a,0)),this.doCompact&&this.compact()}initialTop(r=this.align){return sr(this.start+xa+it,r)-it}compact(){let r=this._free,e=0,a=0,n,i=!1;for(;r;){for(n=r,a=this.blockNext(r);a&&n+this.blockSize(n)===a;)n=a,a=this.blockNext(a);if(n!==r){const s=n-r+this.blockSize(n);this.setBlockSize(r,s);const h=this.blockNext(n);let v=this.blockNext(r);for(;v&&v!==h;){const o=this.blockNext(v);this.setBlockNext(v,0),v=o}this.setBlockNext(r,h),i=!0}r+this.blockSize(r)>=this.top&&(this.top=r,e?this.unlinkBlock(e,r):this._free=this.blockNext(r)),e=r,r=this.blockNext(r)}return i}insert(r){let e=this._free,a=0;for(;e&&!(r<=e);)a=e,e=this.blockNext(e);a?this.setBlockNext(a,r):this._free=r,this.setBlockNext(r,e)}}const Gt=t=>t>0?t+it:0,ir=t=>t>0?t-it:0,sr=(t,r)=>(r--,t+r&~r),Ui={u8:1,u8c:1,i8:1,u16:2,i16:2,u32:4,i32:4,i64:8,u64:8,f32:4,f64:8},Xi=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Zi=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],qi=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Hi=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],la=(t,r,e)=>{let a=t;return typeof r=="string"||Array.isArray(r)?a=t.toLocaleString(r,e):(r===!0||e!==void 0)&&(a=t.toLocaleString(void 0,e)),a};function Wi(t,r){if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);r={bits:!1,binary:!1,space:!0,...r};const e=r.bits?r.binary?Hi:qi:r.binary?Zi:Xi,a=r.space?" ":"";if(r.signed&&t===0)return` 0${a}${e[0]}`;const n=t<0,i=n?"-":r.signed?"+":"";n&&(t=-t);let s;if(r.minimumFractionDigits!==void 0&&(s={minimumFractionDigits:r.minimumFractionDigits}),r.maximumFractionDigits!==void 0&&(s={maximumFractionDigits:r.maximumFractionDigits,...s}),t<1){const f=la(t,r.locale,s);return i+f+a+e[0]}const h=Math.min(Math.floor(r.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),e.length-1);t/=(r.binary?1024:1e3)**h,s||(t=t.toPrecision(3));const v=la(Number(t),r.locale,s),o=e[h];return i+v+a+o}const Qi=8192,da=0,ma=1;class Ma{constructor(r){if(this.onGrowBufferHandlers=[],r&&"buffers"in r)this.buffers=r.buffers.map(e=>new jr({buf:e,skipInitialization:!0})),this.memory=new J(this,{bufferPosition:0,bufferByteOffset:40}),this.isClone=!0;else{const e=(r==null?void 0:r.bufferSize)??Qi;if(e>ea)throw new Error(`Buffer size ${e} is greater than max ${ea} that we can reference with pointers`);let a=this.createBuffer(e);this.buffers=[a];const n=a.callocAs("u32",2);if(n)this.memory=new J(this,{bufferPosition:0,bufferByteOffset:n.byteOffset});else throw new Error("Failed to initialize first byte from buffer");this.memory.data[da]=e,this.memory.data[ma]=1,this.isClone=!1;for(let i=1;i<((r==null?void 0:r.initialBuffers)??1);i++)this.buffers.push(this.createBuffer(e))}}get bufferSize(){return this.memory.data[da]}addSharedBuffer(r){this.buffers[r.bufferPosition]=new jr({buf:r.buffer,skipInitialization:!0})}createBuffer(r){return new jr({buf:new SharedArrayBuffer(r??this.bufferSize),compact:!1,split:!1})}addOnGrowBufferHandlers(r){this.onGrowBufferHandlers.push(r)}allocUI32(r){for(let i=0;i<this.buffers.length;i++){const s=this.buffers[i];if(!s)continue;const h=s.callocAs("u32",r);if(h)return new J(this,{data:h,buffer:s})}if(this.buffers.length>=aa)throw new Error(`Can't initialize a new buffer since it would have a position greater than the max of ${aa}`);const e=this.createBuffer();let a=Atomics.add(this.memory.data,ma,1);this.buffers[a]=e,this.onGrowBufferHandlers.forEach(i=>i({bufferPosition:a,buffer:e.buf}));const n=e.callocAs("u32",r);if(n)return new J(this,{data:n,buffer:e});throw new Error(`Unable to allocate ${r} numbers even after adding a new buffer`)}getSharedAlloc(r){if(this.buffers[r.bufferPosition]!==void 0)return new J(this,r)}get currentUsed(){return this.totalAllocated-this.buffers.reduce((r,e)=>r+e.stats().available,0)}get totalAllocated(){return this.buffers[0].buf.byteLength*this.buffers.length}prettyMemory(){return`${wa(this.currentUsed)} / ${wa(this.totalAllocated)}`}getSharedMemory(){return{buffers:this.buffers.map(r=>r.buf)}}}function wa(t){return Wi(t,{binary:!0,minimumFractionDigits:1,maximumFractionDigits:1})}const _a=4,ga=1,Bt=2,We=class We{get length(){return Atomics.load(this.firstBlock.data,Bt)}get type(){return Atomics.load(this.uint16Array,0)}set type(r){Atomics.store(this.uint16Array,0,r)}get dataLength(){return Math.max(1,Atomics.load(this.uint16Array,1))}set dataLength(r){Atomics.store(this.uint16Array,1,r)}constructor(r,e){if(this.memory=r,e&&"firstBlock"in e)this.firstBlock=new J(r,e.firstBlock),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+(Bt+1)*Uint32Array.BYTES_PER_ELEMENT,2);else{e&&e.initWithBlock?this.firstBlock=new J(r,e.initWithBlock):this.firstBlock=r.allocUI32(_a),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+(Bt+1)*Uint32Array.BYTES_PER_ELEMENT,2);const a=(e==null?void 0:e.type)??Uint32Array;a===Uint32Array?this.type=0:a===Int32Array?this.type=1:a===Float32Array&&(this.type=2),this.dataLength=(e==null?void 0:e.dataLength)??1}}insert(r){typeof r=="number"&&(r=[r]);let e=this.dataLength;if(r.length>e)throw new Error(`Can't insert ${r.length} array into shared list of ${e} dataLength`);let a=this.memory.allocUI32(ga+e),n=this.getDataBlock(a.data),i=a.pointer;for(let v=0;v<r.length;v++)n instanceof Int32Array||n instanceof Uint32Array?Atomics.store(n,v,r[v]):n[v]=r[v];let s,h=!1;for(;!h;)s=Ri(this.firstBlock.data,1),h=Li(this.firstBlock.data,1,i,s);if(s){let{bufferPosition:v,bufferByteOffset:o}=Xr(s),f=new Uint32Array(this.memory.buffers[v].buf,o,1);ia(f,0,i)}else ia(this.firstBlock.data,0,i);Atomics.add(this.firstBlock.data,Bt,1)}deleteMatch(r){for(let{data:e,index:a,deleteCurrent:n}of this)if(r(e,a))return n(),!0;return!1}deleteIndex(r){return r>=this.length||r<0?!1:this.deleteMatch((e,a)=>a===r)}deleteValue(r){return typeof r=="number"?this.deleteMatch(e=>e[0]===r):this.deleteMatch(e=>{if(e.length!==r.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==r[a])return!1;return!0})}*[Symbol.iterator](){let r=0,{bufferPosition:e,bufferByteOffset:a}=ar(this.firstBlock.data,0),n=this.firstBlock.data,i=0,s=0;for(;a;){let h=this.memory.buffers[e];if(!h)return;let v=new Uint32Array(h.buf,a,2),o=this.getDataBlock(v),f=e,y=a;({bufferPosition:e,bufferByteOffset:a}=ar(v,0));let u=!0;yield{data:o,index:r,deleteCurrent:()=>{na(n,0,e,a),a||na(this.firstBlock.data,1,i,s),h.free(v.byteOffset),Atomics.sub(this.firstBlock.data,Bt,1),u=!1}},u&&(n=v,i=f,s=y,r++)}}forEach(r){for(let e of this)r(e.data)}getSharedMemory(){return{firstBlock:this.firstBlock.getSharedMemory()}}getDataBlock(r){const e=r.byteOffset+ga*r.BYTES_PER_ELEMENT;switch(this.type){case 1:return new Int32Array(r.buffer,e,this.dataLength);case 0:return new Uint32Array(r.buffer,e,this.dataLength);case 2:return new Float32Array(r.buffer,e,this.dataLength);default:throw new Error(`Unknown data block type ${this.type}`)}}free(){let{bufferPosition:r,bufferByteOffset:e}=ar(this.firstBlock.data,0);for(;e;){let a=new J(this.memory,{bufferPosition:r,bufferByteOffset:e});({bufferPosition:r,bufferByteOffset:e}=ar(a.data,0)),a.free()}this.firstBlock.free()}};We.ALLOCATE_COUNT=_a;let _t=We;const ji=new ArrayBuffer(8);new BigUint64Array(ji);const Ki=0,Kr=1,ba=2,Nr=class Nr{constructor(r,e){F(this,"world");F(this,"memory");F(this,"takenMemoryBytes",0);F(this,"_id");F(this,"positionMemory");F(this,"key","boid");F(this,"shieldMemory");F(this,"getSprite");this.world=r,"size"in e?(this.memory=r.heap.allocUI32(e.size+Nr.ALLOCATE_COUNT),this.memory.data[Kr]=r.getId(),this.memory.data[Ki]=e.type):e instanceof J?this.memory=e:this.memory=new J(r.heap,e),this._id=this.memory.data[Kr],this.takenMemoryBytes+=3*this.memory.data.BYTES_PER_ELEMENT,this.positionMemory=this.getArrayFromMemory(Float32Array,5),this.shieldMemory=this.getArrayFromMemory(Float32Array,5)}get id(){return this._id}get dead(){return this._id!==this.memory.data[Kr]||!!this.memory.data[ba]}set dead(r){this.memory.data[ba]=r?1:0}get x(){return this.positionMemory[0]}set x(r){this.positionMemory[0]=r}get y(){return this.positionMemory[1]}set y(r){this.positionMemory[1]=r}get width(){return this.positionMemory[2]}set width(r){this.positionMemory[2]=r}get height(){return this.positionMemory[3]}set height(r){this.positionMemory[3]=r}get angle(){return this.positionMemory[4]}set angle(r){this.positionMemory[4]=r}get shields(){return this.shieldMemory[0]}set shields(r){this.shieldMemory[0]=r}get maxShields(){return this.shieldMemory[1]}set maxShields(r){this.shieldMemory[1]=r}get timeToRegenerateShields(){return this.shieldMemory[2]}set timeToRegenerateShields(r){this.shieldMemory[2]=r}get timeSinceShieldRegeneration(){return this.shieldMemory[3]}set timeSinceShieldRegeneration(r){this.shieldMemory[3]=r}get timeSinceTakenDamage(){return this.shieldMemory[4]}set timeSinceTakenDamage(r){this.shieldMemory[4]=r}load(r){Object.keys(r).forEach(e=>{this[e]=r[e]})}die(){this.dead=!0,this.world.removeEntity(this),this.memory.free()}canTakeDamage(){return this.timeSinceTakenDamage>=.2&&!this.dead}takeDamage(r){this.canTakeDamage()&&(this.shields-=r,this.timeSinceTakenDamage=0,this.shields<0&&this.die())}getArrayFromMemory(r,e){let a=this.getAllocatedFromMemory(e);return new r(this.memory.data.buffer,a.bufferByteOffset,e)}getAllocatedFromMemory(r){let e=this.takenMemoryBytes;return this.takenMemoryBytes+=r*4,{bufferPosition:this.memory.bufferPosition,bufferByteOffset:this.memory.data.byteOffset+e}}get pointer(){return this.memory.pointer}};F(Nr,"ALLOCATE_COUNT",13);let hr=Nr;var Ft=(t=>(t[t.ship=1]="ship",t[t.station=2]="station",t))(Ft||{});class $a extends hr{constructor(e,a){var r=(...vM)=>(super(...vM),F(this,"station"),F(this,"uintMemory"),F(this,"velocityMemory"),this);"bufferPosition"in a?(r(e,a),this.velocityMemory=this.getArrayFromMemory(Float32Array,3),this.uintMemory=this.getArrayFromMemory(Uint32Array,2),this.station=this.world.getEntityByPointer(this.uintMemory[0])):(r(e,{size:5,type:Ft.ship}),this.velocityMemory=this.getArrayFromMemory(Float32Array,3),this.uintMemory=this.getArrayFromMemory(Uint32Array,2),this.width=10,this.height=5,this.speed=100,this.shields=1,this.maxShields=1,this.timeToRegenerateShields=1,this.station=a.station,this.uintMemory[0]=this.station.pointer)}get speed(){return this.velocityMemory[0]}set speed(e){this.velocityMemory[0]=e}get velocityX(){return this.velocityMemory[1]}set velocityX(e){this.velocityMemory[1]=e}get velocityY(){return this.velocityMemory[2]}set velocityY(e){this.velocityMemory[2]=e}get targetPointer(){return Atomics.load(this.uintMemory,1)}set targetPointer(e){Atomics.store(this.uintMemory,1,e)}get color(){var e;return((e=this.station)==null?void 0:e.color)??0}die(){var e;this.dead||((e=this.station)==null||e.removeShip(this),super.die())}}class vt{constructor(r,e){F(this,"world");F(this,"list");F(this,"entityCache",new Map);this.world=r,e?this.list=new _t(r.heap,e):this.list=new _t(r.heap)}get length(){return this.list.length}insert(r){this.list.insert(r.pointer),this.entityCache.set(r.pointer,r)}delete(r){return this.entityCache.delete(r.pointer),this.list.deleteValue(r.pointer)}*[Symbol.iterator](){let r=this.list[Symbol.iterator]();for(let{data:e,deleteCurrent:a}of r){let n=Atomics.load(e,0),i=this.world.getEntityByPointer(n);i&&(yield{entity:i,deleteCurrent:a})}}forEach(r,e){for(let{entity:a}of this)(!e||e(a))&&r(a)}find(r){for(let{entity:e}of this)if(r(e))return e}filter(r){let e=[];for(let{entity:a}of this)r(a)&&e.push(a);return e}map(r){let e=[];for(let{entity:a}of this)e.push(r(a));return e}getSharedMemory(){return this.list.getSharedMemory()}free(){this.list.free()}}F(vt,"ALLOCATE_COUNT",_t.ALLOCATE_COUNT);const vr=0,Ca=1;class Pa extends hr{constructor(e,a){var r=(...oM)=>(super(...oM),F(this,"ships"),F(this,"moneyMemory"),this);a?(r(e,a),this.moneyMemory=this.getArrayFromMemory(Uint32Array,2),this.ships=new vt(this.world,{initWithBlock:this.getAllocatedFromMemory(vt.ALLOCATE_COUNT)})):(r(e,{size:2+vt.ALLOCATE_COUNT,type:Ft.station}),this.moneyMemory=this.getArrayFromMemory(Uint32Array,2),this.ships=new vt(this.world,{firstBlock:this.getAllocatedFromMemory(vt.ALLOCATE_COUNT)}),this.width=20,this.height=20,this.shields=2,this.maxShields=2,this.timeToRegenerateShields=5),this.key="station"}get money(){return Atomics.load(this.moneyMemory,vr)}set money(e){Atomics.store(this.moneyMemory,vr,e)}get color(){return this.moneyMemory[Ca]}set color(e){this.moneyMemory[Ca]=e}addMoney(e){Atomics.add(this.moneyMemory,vr,e)}subtractMoney(e){Atomics.sub(this.moneyMemory,vr,e)}removeShip(e){this.dead||this.ships.delete(e)}die(){this.dead||(this.ships.forEach(e=>{e.die()}),this.ships.free(),super.die())}}const Ji=0,Ta=1,za=2,pa=3,kr=class kr{constructor(r){F(this,"entities");F(this,"entityCache",new Map);F(this,"bounds");F(this,"heap");F(this,"memory");r?(this.heap=new Ma(r.heap),this.memory=new J(this.heap,r.world),this.entities=new vt(this,{firstBlock:{bufferPosition:this.memory.bufferPosition,bufferByteOffset:this.memory.data.byteOffset+pa*this.memory.data.BYTES_PER_ELEMENT}})):(this.heap=new Ma({bufferSize:1024*100}),this.memory=this.heap.allocUI32(kr.ALLOCATE_COUNT),this.entities=new vt(this,{initWithBlock:{bufferPosition:this.memory.bufferPosition,bufferByteOffset:this.memory.data.byteOffset+pa*this.memory.data.BYTES_PER_ELEMENT}}));let e=this.memory;this.bounds={get width(){return e.data[Ta]},set width(a){e.data[Ta]=a},get height(){return e.data[za]},set height(a){e.data[za]=a}}}load(r){r.entities.forEach(e=>{let a;switch(e.type){case"station":a=new Pa(this);break;default:throw new Error(`Invalid entity type: ${e.type}`)}a.load(e),this.addEntity(a)}),r.bounds&&(this.bounds.width=r.bounds.width,this.bounds.height=r.bounds.height)}addEntity(r){this.entities.insert(r)}removeEntity(r){this.entities.delete(r)}getEntityByPointer(r){if(!r)return;let e=this.entityCache.get(r);if(e!=null&&e.dead&&(this.entityCache.delete(r),e=void 0),!e){let a=new J(this.heap,Xr(r)),n=a.data[0];n===Ft.ship?e=new $a(this,a):n===Ft.station&&(e=new Pa(this,a)),e&&this.entityCache.set(r,e)}return e}update(r){try{this.garbageCollect()}catch{}}garbageCollect(){this.entities.forEach(r=>{r.dead&&this.entityCache.delete(r.pointer)})}growMemoryFromThread(r,e){r.forEach(a=>this.heap.addSharedBuffer(a))}getId(){return Atomics.add(this.memory.data,Ji,1)}getSharedMemory(){return{heap:this.heap.getSharedMemory(),world:this.memory.getSharedMemory()}}};F(kr,"ALLOCATE_COUNT",3+_t.ALLOCATE_COUNT);let Jr=kr;function ts(t){let r,e,a={memoryGrown:[]};self.onmessage=function(n){if(n.data.init)r=new Jr(n.data.init),e=t(r),r.heap.addOnGrowBufferHandlers(i=>a.memoryGrown.push(i));else if(n.data.elapsedTime){n.data.memoryGrown.forEach(s=>r.heap.addSharedBuffer(s));try{e.run(n.data.elapsedTime),r.garbageCollect()}catch{}self.postMessage({done:!0,...a}),a={memoryGrown:[]}}}}function Oa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rs={CIRCLE:0,ELLIPSE:1,LINE:2,POINT:3,POLYGON:4,RECTANGLE:5,TRIANGLE:6},ot=rs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var es=function(t){if(!t||typeof t!="object"||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}return!0},as=es;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ia=as,Ea=function(){var t,r,e,a,n,i,s=arguments[0]||{},h=1,v=arguments.length,o=!1;for(typeof s=="boolean"&&(o=s,s=arguments[1]||{},h=2),v===h&&(s=this,--h);h<v;h++)if((t=arguments[h])!=null)for(r in t)e=s[r],a=t[r],s!==a&&(o&&a&&(Ia(a)||(n=Array.isArray(a)))?(n?(n=!1,i=e&&Array.isArray(e)?e:[]):i=e&&Ia(e)?e:{},s[r]=Ea(o,i,a)):a!==void 0&&(s[r]=a));return s},Sa=Ea;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function ns(t){return!!t.get&&typeof t.get=="function"||!!t.set&&typeof t.set=="function"}function is(t,r,e){var a=e?t[r]:Object.getOwnPropertyDescriptor(t,r);return!e&&a.value&&typeof a.value=="object"&&(a=a.value),a&&ns(a)?(typeof a.enumerable>"u"&&(a.enumerable=!0),typeof a.configurable>"u"&&(a.configurable=!0),a):!1}function ss(t,r){var e=Object.getOwnPropertyDescriptor(t,r);return e?(e.value&&typeof e.value=="object"&&(e=e.value),e.configurable===!1):!1}function te(t,r,e,a){for(var n in r)if(r.hasOwnProperty(n)){var i=is(r,n,e);if(i!==!1){var s=a||t;if(ss(s.prototype,n)){if(Nt.ignoreFinals)continue;throw new Error("cannot override final property '"+n+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,n,i)}else t.prototype[n]=r[n]}}function Aa(t,r){if(r){Array.isArray(r)||(r=[r]);for(var e=0;e<r.length;e++)te(t,r[e].prototype||r[e])}}function Nt(t){t||(t={});var r,e;if(t.initialize){if(typeof t.initialize!="function")throw new Error("initialize must be a function");r=t.initialize,delete t.initialize}else if(t.Extends){var a=t.Extends;r=function(){a.apply(this,arguments)}}else r=function(){};t.Extends?(r.prototype=Object.create(t.Extends.prototype),r.prototype.constructor=r,e=t.Extends,delete t.Extends):r.prototype.constructor=r;var n=null;return t.Mixins&&(n=t.Mixins,delete t.Mixins),Aa(r,n),te(r,t,!0,e),r}Nt.extend=te,Nt.mixin=Aa,Nt.ignoreFinals=!1;var Y=Nt;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hs=function(t,r,e){if(t.radius>0&&r>=t.left&&r<=t.right&&e>=t.top&&e<=t.bottom){var a=(t.x-r)*(t.x-r),n=(t.y-e)*(t.y-e);return a+n<=t.radius*t.radius}else return!1},kt=hs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vs=Y,os=ot,fs=new vs({initialize:function(r,e){r===void 0&&(r=0),e===void 0&&(e=r),this.type=os.POINT,this.x=r,this.y=e},setTo:function(t,r){return t===void 0&&(t=0),r===void 0&&(r=t),this.x=t,this.y=r,this}}),O=fs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var us=O,ys=function(t,r,e){return e===void 0&&(e=new us),e.x=t.x+t.radius*Math.cos(r),e.y=t.y+t.radius*Math.sin(r),e},re=ys;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cs=function(t,r,e){return Math.max(r,Math.min(e,t))},ee=cs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xs=ee,ls=function(t,r,e){return t=xs(t,0,1),(e-r)*t+r},Dt=ls;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ds={PI2:Math.PI*2,TAU:Math.PI*.5,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:null,MIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER||-9007199254740991,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991},W=ds;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ms=re,Ms=Dt,ws=W,_s=O,gs=function(t,r,e){e===void 0&&(e=new _s);var a=Ms(r,0,ws.PI2);return ms(t,a,e)},Ra=gs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bs=function(t){return 2*(Math.PI*t.radius)},La=bs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $s=La,Cs=re,Ps=Dt,Ts=W,zs=function(t,r,e,a){a===void 0&&(a=[]),!r&&e>0&&(r=$s(t)/e);for(var n=0;n<r;n++){var i=Ps(n/r,0,Ts.PI2);a.push(Cs(t,i))}return a},Ga=zs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ps=O,Os=function(t,r){r===void 0&&(r=new ps);var e=2*Math.PI*Math.random(),a=Math.random()+Math.random(),n=a>1?2-a:a,i=n*Math.cos(e),s=n*Math.sin(e);return r.x=t.x+i*t.radius,r.y=t.y+s*t.radius,r},Ba=Os;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Is=Y,Es=kt,Ss=Ra,As=Ga,Rs=ot,Ls=Ba,Gs=new Is({initialize:function(r,e,a){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),this.type=Rs.CIRCLE,this.x=r,this.y=e,this._radius=a,this._diameter=a*2},contains:function(t,r){return Es(this,t,r)},getPoint:function(t,r){return Ss(this,t,r)},getPoints:function(t,r,e){return As(this,t,r,e)},getRandomPoint:function(t){return Ls(this,t)},setTo:function(t,r,e){return this.x=t,this.y=r,this._radius=e,this._diameter=e*2,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=t*2}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=t*.5}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}}),ae=Gs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bs=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0},Fs=Bs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ns=ae,ks=function(t){return new Ns(t.x,t.y,t.radius)},Ds=ks;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vs=kt,Ys=function(t,r){return Vs(t,r.x,r.y)},Us=Ys;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var or=kt,Xs=function(t,r){return or(t,r.x,r.y)&&or(t,r.right,r.y)&&or(t,r.x,r.bottom)&&or(t,r.right,r.bottom)},Zs=Xs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qs=function(t,r){return r.setTo(t.x,t.y,t.radius)},Hs=qs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ws=function(t,r){return t.x===r.x&&t.y===r.y&&t.radius===r.radius},Qs=Ws;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var js=function(t,r,e){return t.width<=0||t.height<=0?!1:t.x<=r&&t.x+t.width>=r&&t.y<=e&&t.y+t.height>=e},fr=js;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ks=function(t){return 2*(t.width+t.height)},ur=Ks;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Js=ur,th=O,rh=function(t,r,e){if(e===void 0&&(e=new th),r<=0||r>=1)return e.x=t.x,e.y=t.y,e;var a=Js(t)*r;return r>.5?(a-=t.width+t.height,a<=t.width?(e.x=t.right-a,e.y=t.bottom):(e.x=t.x,e.y=t.bottom-(a-t.width))):a<=t.width?(e.x=t.x+a,e.y=t.y):(e.x=t.right,e.y=t.y+(a-t.width)),e},ne=rh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eh=ne,ah=ur,nh=function(t,r,e,a){a===void 0&&(a=[]),!r&&e>0&&(r=ah(t)/e);for(var n=0;n<r;n++){var i=n/r;a.push(eh(t,i))}return a},Fa=nh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ih=O,sh=function(t,r,e){return e===void 0&&(e=new ih),e.x=t.x1+(t.x2-t.x1)*r,e.y=t.y1+(t.y2-t.y1)*r,e},Na=sh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hh=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))},ft=hh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vh=ft,oh=O,fh=function(t,r,e,a){a===void 0&&(a=[]),!r&&e>0&&(r=vh(t)/e);for(var n=t.x1,i=t.y1,s=t.x2,h=t.y2,v=0;v<r;v++){var o=v/r,f=n+(s-n)*o,y=i+(h-i)*o;a.push(new oh(f,y))}return a},ka=fh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uh=O,yh=function(t,r){r===void 0&&(r=new uh);var e=Math.random();return r.x=t.x1+e*(t.x2-t.x1),r.y=t.y1+e*(t.y2-t.y1),r},Da=yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ch=function(t,r,e){return e===void 0&&(e=1e-4),Math.abs(t-r)<e},Va=ch;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xh=Y,Ya=Va,Q=new xh({initialize:function(r,e){this.x=0,this.y=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0):(e===void 0&&(e=r),this.x=r||0,this.y=e||0)},clone:function(){return new Q(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setTo:function(t,r){return this.set(t,r)},setToPolar:function(t,r){return r==null&&(r=1),this.x=Math.cos(t)*r,this.y=Math.sin(t)*r,this},equals:function(t){return this.x===t.x&&this.y===t.y},fuzzyEquals:function(t,r){return Ya(this.x,t.x,r)&&Ya(this.y,t.y,r)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},setAngle:function(t){return this.setToPolar(t,this.length())},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var r=t.x-this.x,e=t.y-this.y;return Math.sqrt(r*r+e*e)},distanceSq:function(t){var r=t.x-this.x,e=t.y-this.y;return r*r+e*e},length:function(){var t=this.x,r=this.y;return Math.sqrt(t*t+r*r)},setLength:function(t){return this.normalize().scale(t)},lengthSq:function(){var t=this.x,r=this.y;return t*t+r*r},normalize:function(){var t=this.x,r=this.y,e=t*t+r*r;return e>0&&(e=1/Math.sqrt(e),this.x=t*e,this.y=r*e),this},normalizeRightHand:function(){var t=this.x;return this.x=this.y*-1,this.y=t,this},normalizeLeftHand:function(){var t=this.x;return this.x=this.y,this.y=t*-1,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,r){r===void 0&&(r=0);var e=this.x,a=this.y;return this.x=e+r*(t.x-e),this.y=a+r*(t.y-a),this},transformMat3:function(t){var r=this.x,e=this.y,a=t.val;return this.x=a[0]*r+a[3]*e+a[6],this.y=a[1]*r+a[4]*e+a[7],this},transformMat4:function(t){var r=this.x,e=this.y,a=t.val;return this.x=a[0]*r+a[4]*e+a[12],this.y=a[1]*r+a[5]*e+a[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(t){var r=this.length();return r&&r>t&&this.scale(t/r),this},reflect:function(t){return t=t.clone().normalize(),this.subtract(t.scale(2*this.dot(t)))},mirror:function(t){return this.reflect(t).negate()},rotate:function(t){var r=Math.cos(t),e=Math.sin(t);return this.set(r*this.x-e*this.y,e*this.x+r*this.y)},project:function(t){var r=this.dot(t)/t.dot(t);return this.copy(t).scale(r)}});Q.ZERO=new Q,Q.RIGHT=new Q(1,0),Q.LEFT=new Q(-1,0),Q.UP=new Q(0,-1),Q.DOWN=new Q(0,1),Q.ONE=new Q(1,1);var gt=Q;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lh=Y,dh=Na,mh=ka,Mh=ot,wh=Da,Ua=gt,_h=new lh({initialize:function(r,e,a,n){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=Mh.LINE,this.x1=r,this.y1=e,this.x2=a,this.y2=n},getPoint:function(t,r){return dh(this,t,r)},getPoints:function(t,r,e){return mh(this,t,r,e)},getRandomPoint:function(t){return wh(this,t)},setTo:function(t,r,e,a){return t===void 0&&(t=0),r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),this.x1=t,this.y1=r,this.x2=e,this.y2=a,this},setFromObjects:function(t,r){return this.x1=t.x,this.y1=t.y,this.x2=r.x,this.y2=r.y,this},getPointA:function(t){return t===void 0&&(t=new Ua),t.set(this.x1,this.y1),t},getPointB:function(t){return t===void 0&&(t=new Ua),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}}),ut=_h;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gh=O,bh=function(t,r){return r===void 0&&(r=new gh),r.x=t.x+Math.random()*t.width,r.y=t.y+Math.random()*t.height,r},Xa=bh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $h=Y,Ch=fr,Ph=ne,Th=Fa,zh=ot,yr=ut,ph=Xa,Oh=new $h({initialize:function(r,e,a,n){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=zh.RECTANGLE,this.x=r,this.y=e,this.width=a,this.height=n},contains:function(t,r){return Ch(this,t,r)},getPoint:function(t,r){return Ph(this,t,r)},getPoints:function(t,r,e){return Th(this,t,r,e)},getRandomPoint:function(t){return ph(this,t)},setTo:function(t,r,e,a){return this.x=t,this.y=r,this.width=e,this.height=a,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return t===void 0&&(t=new yr),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return t===void 0&&(t=new yr),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return t===void 0&&(t=new yr),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return t===void 0&&(t=new yr),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),tt=Oh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ih=tt,Eh=function(t,r){return r===void 0&&(r=new Ih),r.x=t.left,r.y=t.top,r.width=t.diameter,r.height=t.diameter,r},Sh=Eh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ah=function(t,r,e){return t.x+=r,t.y+=e,t},Rh=Ah;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lh=function(t,r){return t.x+=r.x,t.y+=r.y,t},Gh=Lh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U=ae;U.Area=Fs,U.Circumference=La,U.CircumferencePoint=re,U.Clone=Ds,U.Contains=kt,U.ContainsPoint=Us,U.ContainsRect=Zs,U.CopyFrom=Hs,U.Equals=Qs,U.GetBounds=Sh,U.GetPoint=Ra,U.GetPoints=Ga,U.Offset=Rh,U.OffsetPoint=Gh,U.Random=Ba;var Bh=U;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fh=function(t,r,e){if(t.width<=0||t.height<=0)return!1;var a=(r-t.x)/t.width,n=(e-t.y)/t.height;return a*=a,n*=n,a+n<.25},cr=Fh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nh=O,kh=function(t,r,e){e===void 0&&(e=new Nh);var a=t.width/2,n=t.height/2;return e.x=t.x+a*Math.cos(r),e.y=t.y+n*Math.sin(r),e},ie=kh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dh=ie,Vh=Dt,Yh=W,Uh=O,Xh=function(t,r,e){e===void 0&&(e=new Uh);var a=Vh(r,0,Yh.PI2);return Dh(t,a,e)},Za=Xh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zh=function(t){var r=t.width/2,e=t.height/2,a=Math.pow(r-e,2)/Math.pow(r+e,2);return Math.PI*(r+e)*(1+3*a/(10+Math.sqrt(4-3*a)))},qa=Zh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qh=qa,Hh=ie,Wh=Dt,Qh=W,jh=function(t,r,e,a){a===void 0&&(a=[]),!r&&e>0&&(r=qh(t)/e);for(var n=0;n<r;n++){var i=Wh(n/r,0,Qh.PI2);a.push(Hh(t,i))}return a},Ha=jh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kh=O,Jh=function(t,r){r===void 0&&(r=new Kh);var e=Math.random()*Math.PI*2,a=Math.sqrt(Math.random());return r.x=t.x+a*Math.cos(e)*t.width/2,r.y=t.y+a*Math.sin(e)*t.height/2,r},Wa=Jh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tv=Y,rv=cr,ev=Za,av=Ha,nv=ot,iv=Wa,sv=new tv({initialize:function(r,e,a,n){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=nv.ELLIPSE,this.x=r,this.y=e,this.width=a,this.height=n},contains:function(t,r){return rv(this,t,r)},getPoint:function(t,r){return ev(this,t,r)},getPoints:function(t,r,e){return av(this,t,r,e)},getRandomPoint:function(t){return iv(this,t)},setTo:function(t,r,e,a){return this.x=t,this.y=r,this.width=e,this.height=a,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),Qa=sv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hv=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI},vv=hv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ov=Qa,fv=function(t){return new ov(t.x,t.y,t.width,t.height)},uv=fv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yv=cr,cv=function(t,r){return yv(t,r.x,r.y)},xv=cv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xr=cr,lv=function(t,r){return xr(t,r.x,r.y)&&xr(t,r.right,r.y)&&xr(t,r.x,r.bottom)&&xr(t,r.right,r.bottom)},dv=lv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mv=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},Mv=mv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wv=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},_v=wv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gv=tt,bv=function(t,r){return r===void 0&&(r=new gv),r.x=t.left,r.y=t.top,r.width=t.width,r.height=t.height,r},$v=bv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cv=function(t,r,e){return t.x+=r,t.y+=e,t},Pv=Cv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tv=function(t,r){return t.x+=r.x,t.y+=r.y,t},zv=Tv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var X=Qa;X.Area=vv,X.Circumference=qa,X.CircumferencePoint=ie,X.Clone=uv,X.Contains=cr,X.ContainsPoint=xv,X.ContainsRect=dv,X.CopyFrom=Mv,X.Equals=_v,X.GetBounds=$v,X.GetPoint=Za,X.GetPoints=Ha,X.Offset=Pv,X.OffsetPoint=zv,X.Random=Wa;var pv=X;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ov=function(t,r,e,a){var n=t-e,i=r-a;return Math.sqrt(n*n+i*i)},ja=Ov;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Iv=ja,Ev=function(t,r){return Iv(t.x,t.y,r.x,r.y)<=t.radius+r.radius},Ka=Ev;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sv=function(t,r){var e=r.width/2,a=r.height/2,n=Math.abs(t.x-r.x-e),i=Math.abs(t.y-r.y-a),s=e+t.radius,h=a+t.radius;if(n>s||i>h)return!1;if(n<=e||i<=a)return!0;var v=n-e,o=i-a,f=v*v,y=o*o,u=t.radius*t.radius;return f+y<=u},Ja=Sv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bt=O,Av=Ka,Rv=function(t,r,e){if(e===void 0&&(e=[]),Av(t,r)){var a=t.x,n=t.y,i=t.radius,s=r.x,h=r.y,v=r.radius,o,f,y,u,c;if(n===h)c=(v*v-i*i-s*s+a*a)/(2*(a-s)),o=1,f=-2*h,y=s*s+c*c-2*s*c+h*h-v*v,u=f*f-4*o*y,u===0?e.push(new bt(c,-f/(2*o))):u>0&&(e.push(new bt(c,(-f+Math.sqrt(u))/(2*o))),e.push(new bt(c,(-f-Math.sqrt(u))/(2*o))));else{var x=(a-s)/(n-h),l=(v*v-i*i-s*s+a*a-h*h+n*n)/(2*(n-h));o=x*x+1,f=2*n*x-2*l*x-2*a,y=a*a+n*n+l*l-i*i-2*n*l,u=f*f-4*o*y,u===0?(c=-f/(2*o),e.push(new bt(c,l-c*x))):u>0&&(c=(-f+Math.sqrt(u))/(2*o),e.push(new bt(c,l-c*x)),c=(-f-Math.sqrt(u))/(2*o),e.push(new bt(c,l-c*x)))}}return e},Lv=Rv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var se=kt,Gv=O,Bv=new Gv,Fv=function(t,r,e){if(e===void 0&&(e=Bv),se(r,t.x1,t.y1))return e.x=t.x1,e.y=t.y1,!0;if(se(r,t.x2,t.y2))return e.x=t.x2,e.y=t.y2,!0;var a=t.x2-t.x1,n=t.y2-t.y1,i=r.x-t.x1,s=r.y-t.y1,h=a*a+n*n,v=a,o=n;if(h>0){var f=(i*a+s*n)/h;v*=f,o*=f}e.x=t.x1+v,e.y=t.y1+o;var y=v*v+o*o;return y<=h&&v*a+o*n>=0&&se(r,e.x,e.y)},he=Fv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ve=O,Nv=he,kv=function(t,r,e){if(e===void 0&&(e=[]),Nv(t,r)){var a=t.x1,n=t.y1,i=t.x2,s=t.y2,h=r.x,v=r.y,o=r.radius,f=i-a,y=s-n,u=a-h,c=n-v,x=f*f+y*y,l=2*(f*u+y*c),d=u*u+c*c-o*o,M=l*l-4*x*d,w,m;if(M===0){var _=-l/(2*x);w=a+_*f,m=n+_*y,_>=0&&_<=1&&e.push(new ve(w,m))}else if(M>0){var g=(-l-Math.sqrt(M))/(2*x);w=a+g*f,m=n+g*y,g>=0&&g<=1&&e.push(new ve(w,m));var b=(-l+Math.sqrt(M))/(2*x);w=a+b*f,m=n+b*y,b>=0&&b<=1&&e.push(new ve(w,m))}}return e},oe=kv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lr=oe,Dv=Ja,Vv=function(t,r,e){if(e===void 0&&(e=[]),Dv(t,r)){var a=r.getLineA(),n=r.getLineB(),i=r.getLineC(),s=r.getLineD();lr(a,t,e),lr(n,t,e),lr(i,t,e),lr(s,t,e)}return e},Yv=Vv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uv=Y,V=new Uv({initialize:function(r,e,a){this.x=0,this.y=0,this.z=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0):(this.x=r||0,this.y=e||0,this.z=a||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new V(this.x,this.y,this.z)},addVectors:function(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this},crossVectors:function(t,r){var e=t.x,a=t.y,n=t.z,i=r.x,s=r.y,h=r.z;return this.x=a*h-n*s,this.y=n*i-e*h,this.z=e*s-a*i,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,r,e){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=r||0,this.z=e||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,r){return this.fromArray(t.val,r*4)},fromArray:function(t,r){return r===void 0&&(r=0),this.x=t[r],this.y=t[r+1],this.z=t[r+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var r=t.x-this.x,e=t.y-this.y,a=t.z-this.z||0;return Math.sqrt(r*r+e*e+a*a)},distanceSq:function(t){var r=t.x-this.x,e=t.y-this.y,a=t.z-this.z||0;return r*r+e*e+a*a},length:function(){var t=this.x,r=this.y,e=this.z;return Math.sqrt(t*t+r*r+e*e)},lengthSq:function(){var t=this.x,r=this.y,e=this.z;return t*t+r*r+e*e},normalize:function(){var t=this.x,r=this.y,e=this.z,a=t*t+r*r+e*e;return a>0&&(a=1/Math.sqrt(a),this.x=t*a,this.y=r*a,this.z=e*a),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var r=this.x,e=this.y,a=this.z,n=t.x,i=t.y,s=t.z;return this.x=e*s-a*i,this.y=a*n-r*s,this.z=r*i-e*n,this},lerp:function(t,r){r===void 0&&(r=0);var e=this.x,a=this.y,n=this.z;return this.x=e+r*(t.x-e),this.y=a+r*(t.y-a),this.z=n+r*(t.z-n),this},applyMatrix3:function(t){var r=this.x,e=this.y,a=this.z,n=t.val;return this.x=n[0]*r+n[3]*e+n[6]*a,this.y=n[1]*r+n[4]*e+n[7]*a,this.z=n[2]*r+n[5]*e+n[8]*a,this},applyMatrix4:function(t){var r=this.x,e=this.y,a=this.z,n=t.val,i=1/(n[3]*r+n[7]*e+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*e+n[8]*a+n[12])*i,this.y=(n[1]*r+n[5]*e+n[9]*a+n[13])*i,this.z=(n[2]*r+n[6]*e+n[10]*a+n[14])*i,this},transformMat3:function(t){var r=this.x,e=this.y,a=this.z,n=t.val;return this.x=r*n[0]+e*n[3]+a*n[6],this.y=r*n[1]+e*n[4]+a*n[7],this.z=r*n[2]+e*n[5]+a*n[8],this},transformMat4:function(t){var r=this.x,e=this.y,a=this.z,n=t.val;return this.x=n[0]*r+n[4]*e+n[8]*a+n[12],this.y=n[1]*r+n[5]*e+n[9]*a+n[13],this.z=n[2]*r+n[6]*e+n[10]*a+n[14],this},transformCoordinates:function(t){var r=this.x,e=this.y,a=this.z,n=t.val,i=r*n[0]+e*n[4]+a*n[8]+n[12],s=r*n[1]+e*n[5]+a*n[9]+n[13],h=r*n[2]+e*n[6]+a*n[10]+n[14],v=r*n[3]+e*n[7]+a*n[11]+n[15];return this.x=i/v,this.y=s/v,this.z=h/v,this},transformQuat:function(t){var r=this.x,e=this.y,a=this.z,n=t.x,i=t.y,s=t.z,h=t.w,v=h*r+i*a-s*e,o=h*e+s*r-n*a,f=h*a+n*e-i*r,y=-n*r-i*e-s*a;return this.x=v*h+y*-n+o*-s-f*-i,this.y=o*h+y*-i+f*-n-v*-s,this.z=f*h+y*-s+v*-i-o*-n,this},project:function(t){var r=this.x,e=this.y,a=this.z,n=t.val,i=n[0],s=n[1],h=n[2],v=n[3],o=n[4],f=n[5],y=n[6],u=n[7],c=n[8],x=n[9],l=n[10],d=n[11],M=n[12],w=n[13],m=n[14],_=n[15],g=1/(r*v+e*u+a*d+_);return this.x=(r*i+e*o+a*c+M)*g,this.y=(r*s+e*f+a*x+w)*g,this.z=(r*h+e*y+a*l+m)*g,this},projectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unprojectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unproject:function(t,r){var e=t.x,a=t.y,n=t.z,i=t.w,s=this.x-e,h=i-this.y-1-a,v=this.z;return this.x=2*s/n-1,this.y=2*h/i-1,this.z=2*v-1,this.project(r)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});V.ZERO=new V,V.RIGHT=new V(1,0,0),V.LEFT=new V(-1,0,0),V.UP=new V(0,-1,0),V.DOWN=new V(0,1,0),V.FORWARD=new V(0,0,1),V.BACK=new V(0,0,-1),V.ONE=new V(1,1,1);var at=V;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xv=at,Zv=function(t,r,e,a){e===void 0&&(e=!1);var n=t.x1,i=t.y1,s=t.x2,h=t.y2,v=r.x1,o=r.y1,f=r.x2,y=r.y2,u=s-n,c=h-i,x=f-v,l=y-o,d=u*l-c*x;if(d===0)return null;var M,w,m;if(e){if(M=(u*(o-i)+c*(n-v))/(x*c-l*u),w=(v+x*M-n)/u,w<0||M<0||M>1)return null;m=w}else{if(M=((v-n)*l-(o-i)*x)/d,w=((i-o)*u-(n-v)*c)/d,M<0||M>1||w<0||w>1)return null;m=M}return a===void 0&&(a=new Xv),a.set(n+u*m,i+c*m,m)},tn=Zv;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qv=tn,Hv=ut,rn=at,en=new Hv,dr=new rn,Wv=function(t,r,e,a){e===void 0&&(e=!1),a===void 0&&(a=new rn);var n=!1;a.set(),dr.set();for(var i=r[r.length-1],s=0;s<r.length;s++){var h=r[s];en.setTo(i.x,i.y,h.x,h.y),i=h,qv(t,en,e,dr)&&(!n||dr.z<a.z)&&(a.copy(dr),n=!0)}return n?a:null},an=Wv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qv=Y,Z=new Qv({initialize:function(r,e,a,n){this.x=0,this.y=0,this.z=0,this.w=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0,this.w=r.w||0):(this.x=r||0,this.y=e||0,this.z=a||0,this.w=n||0)},clone:function(){return new Z(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,r,e,a){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=r||0,this.z=e||0,this.w=a||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,r=this.y,e=this.z,a=this.w;return Math.sqrt(t*t+r*r+e*e+a*a)},lengthSq:function(){var t=this.x,r=this.y,e=this.z,a=this.w;return t*t+r*r+e*e+a*a},normalize:function(){var t=this.x,r=this.y,e=this.z,a=this.w,n=t*t+r*r+e*e+a*a;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=r*n,this.z=e*n,this.w=a*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var e=this.x,a=this.y,n=this.z,i=this.w;return this.x=e+r*(t.x-e),this.y=a+r*(t.y-a),this.z=n+r*(t.z-n),this.w=i+r*(t.w-i),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var r=t.x-this.x,e=t.y-this.y,a=t.z-this.z||0,n=t.w-this.w||0;return Math.sqrt(r*r+e*e+a*a+n*n)},distanceSq:function(t){var r=t.x-this.x,e=t.y-this.y,a=t.z-this.z||0,n=t.w-this.w||0;return r*r+e*e+a*a+n*n},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var r=this.x,e=this.y,a=this.z,n=this.w,i=t.val;return this.x=i[0]*r+i[4]*e+i[8]*a+i[12]*n,this.y=i[1]*r+i[5]*e+i[9]*a+i[13]*n,this.z=i[2]*r+i[6]*e+i[10]*a+i[14]*n,this.w=i[3]*r+i[7]*e+i[11]*a+i[15]*n,this},transformQuat:function(t){var r=this.x,e=this.y,a=this.z,n=t.x,i=t.y,s=t.z,h=t.w,v=h*r+i*a-s*e,o=h*e+s*r-n*a,f=h*a+n*e-i*r,y=-n*r-i*e-s*a;return this.x=v*h+y*-n+o*-s-f*-i,this.y=o*h+y*-i+f*-n-v*-s,this.z=f*h+y*-s+v*-i-o*-n,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});Z.prototype.sub=Z.prototype.subtract,Z.prototype.mul=Z.prototype.multiply,Z.prototype.div=Z.prototype.divide,Z.prototype.dist=Z.prototype.distance,Z.prototype.distSq=Z.prototype.distanceSq,Z.prototype.len=Z.prototype.length,Z.prototype.lenSq=Z.prototype.lengthSq;var fe=Z;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jv=at,Kv=fe,Jv=an,$t=new jv,to=function(t,r,e,a){a===void 0&&(a=new Kv),Array.isArray(r)||(r=[r]);var n=!1;a.set(),$t.set();for(var i=0;i<r.length;i++)Jv(t,r[i].points,e,$t)&&(!n||$t.z<a.z)&&(a.set($t.x,$t.y,$t.z,i),n=!0);return n?a:null},nn=to;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ro=function(t,r,e){var a=t.x1,n=t.y1,i=t.x2,s=t.y2,h=r.x1,v=r.y1,o=r.x2,f=r.y2;if(a===i&&n===s||h===o&&v===f)return!1;var y=(f-v)*(i-a)-(o-h)*(s-n);if(y===0)return!1;var u=((o-h)*(n-v)-(f-v)*(a-h))/y,c=((i-a)*(n-v)-(s-n)*(a-h))/y;return u<0||u>1||c<0||c>1?!1:(e&&(e.x=a+u*(i-a),e.y=n+u*(s-n)),!0)},Ct=ro;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eo=function(t,r){var e=t.x1,a=t.y1,n=t.x2,i=t.y2,s=r.x,h=r.y,v=r.right,o=r.bottom,f=0;if(e>=s&&e<=v&&a>=h&&a<=o||n>=s&&n<=v&&i>=h&&i<=o)return!0;if(e<s&&n>=s){if(f=a+(i-a)*(s-e)/(n-e),f>h&&f<=o)return!0}else if(e>v&&n<=v&&(f=a+(i-a)*(v-e)/(n-e),f>=h&&f<=o))return!0;if(a<h&&i>=h){if(f=e+(n-e)*(h-a)/(i-a),f>=s&&f<=v)return!0}else if(a>o&&i<=o&&(f=e+(n-e)*(o-a)/(i-a),f>=s&&f<=v))return!0;return!1},sn=eo;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mr=O,Mr=Ct,ao=sn,no=function(t,r,e){if(e===void 0&&(e=[]),ao(t,r))for(var a=r.getLineA(),n=r.getLineB(),i=r.getLineC(),s=r.getLineD(),h=[new mr,new mr,new mr,new mr],v=[Mr(a,t,h[0]),Mr(n,t,h[1]),Mr(i,t,h[2]),Mr(s,t,h[3])],o=0;o<4;o++)v[o]&&e.push(h[o]);return e},ue=no;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var io=fe,so=nn,ho=ut,hn=new ho;function ye(t,r,e,a,n){var i=Math.cos(t),s=Math.sin(t);hn.setTo(r,e,r+i,e+s);var h=so(hn,a,!0);h&&n.push(new io(h.x,h.y,t,h.w))}function vo(t,r){return t.z-r.z}var oo=function(t,r,e){Array.isArray(e)||(e=[e]);for(var a=[],n=[],i=0;i<e.length;i++)for(var s=e[i].points,h=0;h<s.length;h++){var v=Math.atan2(s[h].y-r,s[h].x-t);n.indexOf(v)===-1&&(ye(v,t,r,e,a),ye(v-1e-5,t,r,e,a),ye(v+1e-5,t,r,e,a),n.push(v))}return a.sort(vo)},fo=oo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uo=function(t,r){return t.width<=0||t.height<=0||r.width<=0||r.height<=0?!1:!(t.right<r.x||t.bottom<r.y||t.x>r.right||t.y>r.bottom)},wr=uo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yo=tt,co=wr,xo=function(t,r,e){return e===void 0&&(e=new yo),co(t,r)&&(e.x=Math.max(t.x,r.x),e.y=Math.max(t.y,r.y),e.width=Math.min(t.right,r.right)-e.x,e.height=Math.min(t.bottom,r.bottom)-e.y),e},lo=xo;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _r=ue,mo=wr,Mo=function(t,r,e){if(e===void 0&&(e=[]),mo(t,r)){var a=t.getLineA(),n=t.getLineB(),i=t.getLineC(),s=t.getLineD();_r(a,r,e),_r(n,r,e),_r(i,r,e),_r(s,r,e)}return e},wo=Mo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _o=function(t,r,e,a){e===void 0&&(e=!1),a===void 0&&(a=[]);for(var n=t.x3-t.x1,i=t.y3-t.y1,s=t.x2-t.x1,h=t.y2-t.y1,v=n*n+i*i,o=n*s+i*h,f=s*s+h*h,y=v*f-o*o,u=y===0?0:1/y,c,x,l,d,M,w,m=t.x1,_=t.y1,g=0;g<r.length&&(l=r[g].x-m,d=r[g].y-_,M=n*l+i*d,w=s*l+h*d,c=(f*M-o*w)*u,x=(v*w-o*M)*u,!(c>=0&&x>=0&&c+x<1&&(a.push({x:r[g].x,y:r[g].y}),e)));g++);return a},ce=_o;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var go=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x,y:t.y}),r.push({x:t.right,y:t.y}),r.push({x:t.right,y:t.bottom}),r.push({x:t.x,y:t.bottom}),r},vn=go;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rt=Ct,Pt=fr,bo=ce,$o=vn,Co=function(t,r){if(r.left>t.right||r.right<t.left||r.top>t.bottom||r.bottom<t.top)return!1;var e=r.getLineA(),a=r.getLineB(),n=r.getLineC();if(Pt(t,e.x1,e.y1)||Pt(t,e.x2,e.y2)||Pt(t,a.x1,a.y1)||Pt(t,a.x2,a.y2)||Pt(t,n.x1,n.y1)||Pt(t,n.x2,n.y2))return!0;var i=t.getLineA(),s=t.getLineB(),h=t.getLineC(),v=t.getLineD();if(rt(e,i)||rt(e,s)||rt(e,h)||rt(e,v)||rt(a,i)||rt(a,s)||rt(a,h)||rt(a,v)||rt(n,i)||rt(n,s)||rt(n,h)||rt(n,v))return!0;var o=$o(t),f=bo(r,o,!0);return f.length>0},on=Co;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Po=on,xe=ue,To=function(t,r,e){if(e===void 0&&(e=[]),Po(t,r)){var a=r.getLineA(),n=r.getLineB(),i=r.getLineC();xe(a,t,e),xe(n,t,e),xe(i,t,e)}return e},zo=To;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var po=function(t,r,e){var a=t.x3-t.x1,n=t.y3-t.y1,i=t.x2-t.x1,s=t.y2-t.y1,h=r-t.x1,v=e-t.y1,o=a*a+n*n,f=a*i+n*s,y=a*h+n*v,u=i*i+s*s,c=i*h+s*v,x=o*u-f*f,l=x===0?0:1/x,d=(u*y-f*c)*l,M=(o*c-f*y)*l;return d>=0&&M>=0&&d+M<1},gr=po;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var le=he,Oo=gr,Io=function(t,r){return t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top?!1:!!(Oo(t,r.x,r.y)||le(t.getLineA(),r)||le(t.getLineB(),r)||le(t.getLineC(),r))},fn=Io;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var de=oe,Eo=fn,So=function(t,r,e){if(e===void 0&&(e=[]),Eo(t,r)){var a=t.getLineA(),n=t.getLineB(),i=t.getLineC();de(a,r,e),de(n,r,e),de(i,r,e)}return e},Ao=So;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var me=Ct,Ro=function(t,r){return!!(t.contains(r.x1,r.y1)||t.contains(r.x2,r.y2)||me(t.getLineA(),r)||me(t.getLineB(),r)||me(t.getLineC(),r))},un=Ro;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Me=O,Lo=un,we=Ct,Go=function(t,r,e){if(e===void 0&&(e=[]),Lo(t,r))for(var a=t.getLineA(),n=t.getLineB(),i=t.getLineC(),s=[new Me,new Me,new Me],h=[we(a,r,s[0]),we(n,r,s[1]),we(i,r,s[2])],v=0;v<3;v++)h[v]&&e.push(s[v]);return e},yn=Go;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bo=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x1,y:t.y1}),r.push({x:t.x2,y:t.y2}),r.push({x:t.x3,y:t.y3}),r},cn=Bo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xn=ce,ln=cn,st=Ct,Fo=function(t,r){if(t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top)return!1;var e=t.getLineA(),a=t.getLineB(),n=t.getLineC(),i=r.getLineA(),s=r.getLineB(),h=r.getLineC();if(st(e,i)||st(e,s)||st(e,h)||st(a,i)||st(a,s)||st(a,h)||st(n,i)||st(n,s)||st(n,h))return!0;var v=ln(t),o=xn(r,v,!0);return o.length>0||(v=ln(r),o=xn(t,v,!0),o.length>0)},dn=Fo;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var No=dn,_e=yn,ko=function(t,r,e){if(e===void 0&&(e=[]),No(t,r)){var a=r.getLineA(),n=r.getLineB(),i=r.getLineC();_e(t,a,e),_e(t,n,e),_e(t,i,e)}return e},Do=ko;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vo=function(t,r,e){e===void 0&&(e=1);var a=r.x1,n=r.y1,i=r.x2,s=r.y2,h=t.x,v=t.y,o=(i-a)*(i-a)+(s-n)*(s-n);if(o===0)return!1;var f=((h-a)*(i-a)+(v-n)*(s-n))/o;if(f<0)return Math.sqrt((a-h)*(a-h)+(n-v)*(n-v))<=e;if(f>=0&&f<=1){var y=((n-v)*(i-a)-(a-h)*(s-n))/o;return Math.abs(y)*Math.sqrt(o)<=e}else return Math.sqrt((i-h)*(i-h)+(s-v)*(s-v))<=e},mn=Vo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yo=mn,Uo=function(t,r){if(!Yo(t,r))return!1;var e=Math.min(r.x1,r.x2),a=Math.max(r.x1,r.x2),n=Math.min(r.y1,r.y2),i=Math.max(r.y1,r.y2);return t.x>=e&&t.x<=a&&t.y>=n&&t.y<=i},Xo=Uo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zo=function(t,r,e,a,n,i){return i===void 0&&(i=0),!(r>t.right+i||e<t.left-i||a>t.bottom+i||n<t.top-i)},qo=Zo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ho={CircleToCircle:Ka,CircleToRectangle:Ja,GetCircleToCircle:Lv,GetCircleToRectangle:Yv,GetLineToCircle:oe,GetLineToLine:tn,GetLineToPoints:an,GetLineToPolygon:nn,GetLineToRectangle:ue,GetRaysFromPointToPolygon:fo,GetRectangleIntersection:lo,GetRectangleToRectangle:wo,GetRectangleToTriangle:zo,GetTriangleToCircle:Ao,GetTriangleToLine:yn,GetTriangleToTriangle:Do,LineToCircle:he,LineToLine:Ct,LineToRectangle:sn,PointToLine:mn,PointToLineSegment:Xo,RectangleToRectangle:wr,RectangleToTriangle:on,RectangleToValues:qo,TriangleToCircle:fn,TriangleToLine:un,TriangleToTriangle:dn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wo=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)},Tt=Wo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qo=function(t,r,e){r===void 0&&(r=1),e===void 0&&(e=[]);var a=Math.round(t.x1),n=Math.round(t.y1),i=Math.round(t.x2),s=Math.round(t.y2),h=Math.abs(i-a),v=Math.abs(s-n),o=a<i?1:-1,f=n<s?1:-1,y=h-v;e.push({x:a,y:n});for(var u=1;!(a===i&&n===s);){var c=y<<1;c>-v&&(y-=v,a+=o),c<h&&(y+=h,n+=f),u%r===0&&e.push({x:a,y:n}),u++}return e},jo=Qo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ko=function(t,r,e){var a=r-(t.x1+t.x2)/2,n=e-(t.y1+t.y2)/2;return t.x1+=a,t.y1+=n,t.x2+=a,t.y2+=n,t},Jo=Ko;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tf=ut,rf=function(t){return new tf(t.x1,t.y1,t.x2,t.y2)},ef=rf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var af=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2)},nf=af;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sf=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2},hf=sf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vf=ft,of=function(t,r,e){e===void 0&&(e=r);var a=vf(t),n=t.x2-t.x1,i=t.y2-t.y1;return r&&(t.x1=t.x1-n/a*r,t.y1=t.y1-i/a*r),e&&(t.x2=t.x2+n/a*e,t.y2=t.y2+i/a*e),t},ff=of;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uf=function(t,r){var e=t.x-r.x,a=t.y-r.y;return Math.sqrt(e*e+a*a)},Mn=uf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yf=function(t,r){return r===void 0&&(r=1.70158),t*t*((r+1)*t-r)},cf=yf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xf=function(t,r){return r===void 0&&(r=1.70158),--t*t*((r+1)*t+r)+1},lf=xf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var df=function(t,r){r===void 0&&(r=1.70158);var e=r*1.525;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)},mf=df;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wn={In:cf,Out:lf,InOut:mf};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mf=function(t){return t=1-t,t<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)},wf=Mf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _f=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},gf=_f;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bf=function(t){var r=!1;return t<.5?(t=1-t*2,r=!0):t=t*2-1,t<1/2.75?t=7.5625*t*t:t<2/2.75?t=7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?t=7.5625*(t-=2.25/2.75)*t+.9375:t=7.5625*(t-=2.625/2.75)*t+.984375,r?(1-t)*.5:t*.5+.5},$f=bf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _n={In:wf,Out:gf,InOut:$f};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cf=function(t){return 1-Math.sqrt(1-t*t)},Pf=Cf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tf=function(t){return Math.sqrt(1- --t*t)},zf=Tf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pf=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},Of=pf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gn={In:Pf,Out:zf,InOut:Of};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var If=function(t){return t*t*t},Ef=If;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sf=function(t){return--t*t*t+1},Af=Sf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rf=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},Lf=Rf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bn={In:Ef,Out:Af,InOut:Lf};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gf=function(t,r,e){if(r===void 0&&(r=.1),e===void 0&&(e=.1),t===0)return 0;if(t===1)return 1;var a=e/4;return r<1?r=1:a=e*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(t-=1))*Math.sin((t-a)*(2*Math.PI)/e))},Bf=Gf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ff=function(t,r,e){if(r===void 0&&(r=.1),e===void 0&&(e=.1),t===0)return 0;if(t===1)return 1;var a=e/4;return r<1?r=1:a=e*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-a)*(2*Math.PI)/e)+1},Nf=Ff;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kf=function(t,r,e){if(r===void 0&&(r=.1),e===void 0&&(e=.1),t===0)return 0;if(t===1)return 1;var a=e/4;return r<1?r=1:a=e*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((t-a)*(2*Math.PI)/e)):r*Math.pow(2,-10*(t-=1))*Math.sin((t-a)*(2*Math.PI)/e)*.5+1},Df=kf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $n={In:Bf,Out:Nf,InOut:Df};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vf=function(t){return Math.pow(2,10*(t-1))-.001},Yf=Vf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uf=function(t){return 1-Math.pow(2,-10*t)},Xf=Uf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zf=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))},qf=Zf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cn={In:Yf,Out:Xf,InOut:qf};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hf=function(t){return t},Wf=Hf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pn=Wf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qf=function(t){return t*t},jf=Qf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kf=function(t){return t*(2-t)},Jf=Kf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tu=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},ru=tu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tn={In:jf,Out:Jf,InOut:ru};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eu=function(t){return t*t*t*t},au=eu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nu=function(t){return 1- --t*t*t*t},iu=nu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var su=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},hu=su;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zn={In:au,Out:iu,InOut:hu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vu=function(t){return t*t*t*t*t},ou=vu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fu=function(t){return--t*t*t*t*t+1},uu=fu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yu=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},cu=yu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pn={In:ou,Out:uu,InOut:cu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xu=function(t){return t===0?0:t===1?1:1-Math.cos(t*Math.PI/2)},lu=xu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var du=function(t){return t===0?0:t===1?1:Math.sin(t*Math.PI/2)},mu=du;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mu=function(t){return t===0?0:t===1?1:.5*(1-Math.cos(Math.PI*t))},wu=Mu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var On={In:lu,Out:mu,InOut:wu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _u=function(t,r){return r===void 0&&(r=1),t<=0?0:t>=1?1:((r*t|0)+1)*(1/r)},gu=_u;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var In=gu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var br=wn,$r=_n,Cr=gn,Vt=bn,Pr=$n,Tr=Cn,En=Pn,Yt=Tn,Ut=zn,Xt=pn,zr=On,bu=In,$u={Power0:En,Power1:Yt.Out,Power2:Vt.Out,Power3:Ut.Out,Power4:Xt.Out,Linear:En,Quad:Yt.Out,Cubic:Vt.Out,Quart:Ut.Out,Quint:Xt.Out,Sine:zr.Out,Expo:Tr.Out,Circ:Cr.Out,Elastic:Pr.Out,Back:br.Out,Bounce:$r.Out,Stepped:bu,"Quad.easeIn":Yt.In,"Cubic.easeIn":Vt.In,"Quart.easeIn":Ut.In,"Quint.easeIn":Xt.In,"Sine.easeIn":zr.In,"Expo.easeIn":Tr.In,"Circ.easeIn":Cr.In,"Elastic.easeIn":Pr.In,"Back.easeIn":br.In,"Bounce.easeIn":$r.In,"Quad.easeOut":Yt.Out,"Cubic.easeOut":Vt.Out,"Quart.easeOut":Ut.Out,"Quint.easeOut":Xt.Out,"Sine.easeOut":zr.Out,"Expo.easeOut":Tr.Out,"Circ.easeOut":Cr.Out,"Elastic.easeOut":Pr.Out,"Back.easeOut":br.Out,"Bounce.easeOut":$r.Out,"Quad.easeInOut":Yt.InOut,"Cubic.easeInOut":Vt.InOut,"Quart.easeInOut":Ut.InOut,"Quint.easeInOut":Xt.InOut,"Sine.easeInOut":zr.InOut,"Expo.easeInOut":Tr.InOut,"Circ.easeInOut":Cr.InOut,"Elastic.easeInOut":Pr.InOut,"Back.easeInOut":br.InOut,"Bounce.easeInOut":$r.InOut};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cu=function(t){return t&&t[0].toUpperCase()+t.slice(1)},Pu=Cu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zt=$u,Tu=Pu,zu=function(t,r){var e=Zt.Power0;if(typeof t=="string")if(Zt.hasOwnProperty(t))e=Zt[t];else{var a="";if(t.indexOf(".")){a=t.substring(t.indexOf(".")+1);var n=a.toLowerCase();n==="in"?a="easeIn":n==="out"?a="easeOut":n==="inout"&&(a="easeInOut")}t=Tu(t.substring(0,t.indexOf(".")+1)+a),Zt.hasOwnProperty(t)&&(e=Zt[t])}else typeof t=="function"&&(e=t);if(!r)return e;var i=r.slice(0);return i.unshift(0),function(s){return i[0]=s,e.apply(this,i)}},pu=zu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sn=Mn,Ou=pu,An=O,Iu=function(t,r,e,a,n){a===void 0&&(a=0),n===void 0&&(n=[]);var i=[],s=t.x1,h=t.y1,v=t.x2-s,o=t.y2-h,f=Ou(r,n),y,u,c=e-1;for(y=0;y<c;y++)u=f(y/c),i.push(new An(s+v*u,h+o*u));if(u=f(1),i.push(new An(s+v*u,h+o*u)),a>0){var x=i[0],l=[x];for(y=1;y<i.length-1;y++){var d=i[y];Sn(x,d)>=a&&(l.push(d),x=d)}var M=i[i.length-1];return Sn(x,M)<a&&l.pop(),l.push(M),l}else return i},Eu=Iu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Su=O,Au=function(t,r){return r===void 0&&(r=new Su),r.x=(t.x1+t.x2)/2,r.y=(t.y1+t.y2)/2,r},Ru=Au;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lu=O,Gu=function(t,r,e){e===void 0&&(e=new Lu);var a=t.x1,n=t.y1,i=t.x2,s=t.y2,h=(i-a)*(i-a)+(s-n)*(s-n);if(h===0)return e;var v=((r.x-a)*(i-a)+(r.y-n)*(s-n))/h;return e.x=a+v*(i-a),e.y=n+v*(s-n),e},Bu=Gu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fu=W,Nu=Tt,ku=O,Du=function(t,r){r===void 0&&(r=new ku);var e=Nu(t)-Fu.TAU;return r.x=Math.cos(e),r.y=Math.sin(e),r},Vu=Du;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yu=function(t,r){var e=t.x1,a=t.y1,n=t.x2,i=t.y2,s=(n-e)*(n-e)+(i-a)*(i-a);if(s===0)return!1;var h=((a-r.y)*(n-e)-(e-r.x)*(i-a))/s;return Math.abs(h)*Math.sqrt(s)},Uu=Yu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xu=function(t){return Math.abs(t.y1-t.y2)},Zu=Xu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qu=function(t,r,e){var a=e-r;return r+((t-r)%a+a)%a},pr=qu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hu=W,Wu=pr,Qu=Tt,ju=function(t){var r=Qu(t)-Hu.TAU;return Wu(r,-Math.PI,Math.PI)},Rn=ju;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ku=W,Ju=Tt,t1=function(t){return Math.cos(Ju(t)-Ku.TAU)},r1=t1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var e1=W,a1=Tt,n1=function(t){return Math.sin(a1(t)-e1.TAU)},i1=n1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s1=function(t,r,e){return t.x1+=r,t.y1+=e,t.x2+=r,t.y2+=e,t},h1=s1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var v1=function(t){return-((t.x2-t.x1)/(t.y2-t.y1))},o1=v1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var f1=Tt,u1=Rn,y1=function(t,r){return 2*u1(r)-Math.PI-f1(t)},c1=y1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x1=function(t,r,e,a){var n=Math.cos(a),i=Math.sin(a),s=t.x1-r,h=t.y1-e;return t.x1=s*n-h*i+r,t.y1=s*i+h*n+e,s=t.x2-r,h=t.y2-e,t.x2=s*n-h*i+r,t.y2=s*i+h*n+e,t},ge=x1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l1=ge,d1=function(t,r){var e=(t.x1+t.x2)/2,a=(t.y1+t.y2)/2;return l1(t,e,a,r)},m1=d1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var M1=ge,w1=function(t,r,e){return M1(t,r.x,r.y,e)},_1=w1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var g1=function(t,r,e,a,n){return t.x1=r,t.y1=e,t.x2=r+Math.cos(a)*n,t.y2=e+Math.sin(a)*n,t},b1=g1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $1=function(t){return(t.y2-t.y1)/(t.x2-t.x1)},C1=$1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var P1=function(t){return Math.abs(t.x1-t.x2)},T1=P1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R=ut;R.Angle=Tt,R.BresenhamPoints=jo,R.CenterOn=Jo,R.Clone=ef,R.CopyFrom=nf,R.Equals=hf,R.Extend=ff,R.GetEasedPoints=Eu,R.GetMidPoint=Ru,R.GetNearestPoint=Bu,R.GetNormal=Vu,R.GetPoint=Na,R.GetPoints=ka,R.GetShortestDistance=Uu,R.Height=Zu,R.Length=ft,R.NormalAngle=Rn,R.NormalX=r1,R.NormalY=i1,R.Offset=h1,R.PerpSlope=o1,R.Random=Da,R.ReflectAngle=c1,R.Rotate=m1,R.RotateAroundPoint=_1,R.RotateAroundXY=ge,R.SetToAngle=b1,R.Slope=C1,R.Width=T1;var z1=R;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var p1=Y,O1=tt,I1=gt;function be(t,r,e,a){var n=t-e,i=r-a,s=n*n+i*i;return Math.sqrt(s)}var E1=new p1({initialize:function(r,e,a){this.vertex1=r,this.vertex2=e,this.vertex3=a,this.bounds=new O1,this._inCenter=new I1},getInCenter:function(t){t===void 0&&(t=!0);var r=this.vertex1,e=this.vertex2,a=this.vertex3,n,i,s,h,v,o;t?(n=r.x,i=r.y,s=e.x,h=e.y,v=a.x,o=a.y):(n=r.vx,i=r.vy,s=e.vx,h=e.vy,v=a.vx,o=a.vy);var f=be(v,o,s,h),y=be(n,i,v,o),u=be(s,h,n,i),c=f+y+u;return this._inCenter.set((n*f+s*y+v*u)/c,(i*f+h*y+o*u)/c)},contains:function(t,r,e){var a=this.vertex1,n=this.vertex2,i=this.vertex3,s=a.vx,h=a.vy,v=n.vx,o=n.vy,f=i.vx,y=i.vy;if(e){var u=e.a,c=e.b,x=e.c,l=e.d,d=e.e,M=e.f;s=a.vx*u+a.vy*x+d,h=a.vx*c+a.vy*l+M,v=n.vx*u+n.vy*x+d,o=n.vx*c+n.vy*l+M,f=i.vx*u+i.vy*x+d,y=i.vx*c+i.vy*l+M}var w=f-s,m=y-h,_=v-s,g=o-h,b=t-s,I=r-h,S=w*w+m*m,T=w*_+m*g,z=w*b+m*I,P=_*_+g*g,E=_*b+g*I,$=S*P-T*T,L=$===0?0:1/$,C=(P*z-T*E)*L,A=(S*E-T*z)*L;return C>=0&&A>=0&&C+A<1},isCounterClockwise:function(t){var r=this.vertex1,e=this.vertex2,a=this.vertex3,n=(e.vx-r.vx)*(a.vy-r.vy)-(e.vy-r.vy)*(a.vx-r.vx);return t<=0?n>=0:n<0},load:function(t,r,e,a,n){return e=this.vertex1.load(t,r,e,a,n),e=this.vertex2.load(t,r,e,a,n),e=this.vertex3.load(t,r,e,a,n),e},transformCoordinatesLocal:function(t,r,e,a){return this.vertex1.transformCoordinatesLocal(t,r,e,a),this.vertex2.transformCoordinatesLocal(t,r,e,a),this.vertex3.transformCoordinatesLocal(t,r,e,a),this},updateBounds:function(){var t=this.vertex1,r=this.vertex2,e=this.vertex3,a=this.bounds;return a.x=Math.min(t.vx,r.vx,e.vx),a.y=Math.min(t.vy,r.vy,e.vy),a.width=Math.max(t.vx,r.vx,e.vx)-a.x,a.height=Math.max(t.vy,r.vy,e.vy)-a.y,this},isInView:function(t,r,e,a,n,i,s,h,v,o,f){this.update(a,n,i,s,h,v,o,f);var y=this.vertex1,u=this.vertex2,c=this.vertex3;if(y.ta<=0&&u.ta<=0&&c.ta<=0||r&&!this.isCounterClockwise(e))return!1;var x=this.bounds;x.x=Math.min(y.tx,u.tx,c.tx),x.y=Math.min(y.ty,u.ty,c.ty),x.width=Math.max(y.tx,u.tx,c.tx)-x.x,x.height=Math.max(y.ty,u.ty,c.ty)-x.y;var l=t.x+t.width,d=t.y+t.height;return x.width<=0||x.height<=0||t.width<=0||t.height<=0?!1:!(x.right<t.x||x.bottom<t.y||x.x>l||x.y>d)},scrollUV:function(t,r){return this.vertex1.scrollUV(t,r),this.vertex2.scrollUV(t,r),this.vertex3.scrollUV(t,r),this},scaleUV:function(t,r){return this.vertex1.scaleUV(t,r),this.vertex2.scaleUV(t,r),this.vertex3.scaleUV(t,r),this},setColor:function(t){return this.vertex1.color=t,this.vertex2.color=t,this.vertex3.color=t,this},update:function(t,r,e,a,n,i,s,h){return this.vertex1.update(r,e,a,n,i,s,h,t),this.vertex2.update(r,e,a,n,i,s,h,t),this.vertex3.update(r,e,a,n,i,s,h,t),this},translate:function(t,r){r===void 0&&(r=0);var e=this.vertex1,a=this.vertex2,n=this.vertex3;return e.x+=t,e.y+=r,a.x+=t,a.y+=r,n.x+=t,n.y+=r,this},x:{get:function(){return this.getInCenter().x},set:function(t){var r=this.getInCenter();this.translate(t-r.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(t){var r=this.getInCenter();this.translate(0,t-r.y)}},alpha:{get:function(){var t=this.vertex1,r=this.vertex2,e=this.vertex3;return(t.alpha+r.alpha+e.alpha)/3},set:function(t){this.vertex1.alpha=t,this.vertex2.alpha=t,this.vertex3.alpha=t}},depth:{get:function(){var t=this.vertex1,r=this.vertex2,e=this.vertex3;return(t.vz+r.vz+e.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}}),Or=E1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S1=function(t,r,e){var a=typeof t;return!t||a==="number"||a==="string"?e:t.hasOwnProperty(r)&&t[r]!==void 0?t[r]:e},A1=S1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R1=Y,$e=at,Ir=1e-6,Er=new R1({initialize:function(r){this.val=new Float32Array(16),r?this.copy(r):this.identity()},clone:function(){return new Er(this)},set:function(t){return this.copy(t)},setValues:function(t,r,e,a,n,i,s,h,v,o,f,y,u,c,x,l){var d=this.val;return d[0]=t,d[1]=r,d[2]=e,d[3]=a,d[4]=n,d[5]=i,d[6]=s,d[7]=h,d[8]=v,d[9]=o,d[10]=f,d[11]=y,d[12]=u,d[13]=c,d[14]=x,d[15]=l,this},copy:function(t){var r=t.val;return this.setValues(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,r,e){var a=zt.fromQuat(e),n=a.val,i=r.x,s=r.y,h=r.z;return this.setValues(n[0]*i,n[1]*i,n[2]*i,0,n[4]*s,n[5]*s,n[6]*s,0,n[8]*h,n[9]*h,n[10]*h,0,t.x,t.y,t.z,1)},xyz:function(t,r,e){this.identity();var a=this.val;return a[12]=t,a[13]=r,a[14]=e,this},scaling:function(t,r,e){this.zero();var a=this.val;return a[0]=t,a[5]=r,a[10]=e,a[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,r=t[1],e=t[2],a=t[3],n=t[6],i=t[7],s=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=r,t[6]=t[9],t[7]=t[13],t[8]=e,t[9]=n,t[11]=t[14],t[12]=a,t[13]=i,t[14]=s,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8],f=t[9],y=t[10],u=t[11],c=t[12],x=t[13],l=t[14],d=t[15],M=r*s-e*i,w=r*h-a*i,m=r*v-n*i,_=e*h-a*s,g=e*v-n*s,b=a*v-n*h,I=o*x-f*c,S=o*l-y*c,T=o*d-u*c,z=f*l-y*x,P=f*d-u*x,E=y*d-u*l,$=M*E-w*P+m*z+_*T-g*S+b*I;return $?($=1/$,this.setValues((s*E-h*P+v*z)*$,(a*P-e*E-n*z)*$,(x*b-l*g+d*_)*$,(y*g-f*b-u*_)*$,(h*T-i*E-v*S)*$,(r*E-a*T+n*S)*$,(l*m-c*b-d*w)*$,(o*b-y*m+u*w)*$,(i*P-s*T+v*I)*$,(e*T-r*P-n*I)*$,(c*g-x*m+d*M)*$,(f*m-o*g-u*M)*$,(s*S-i*z-h*I)*$,(r*z-e*S+a*I)*$,(x*w-c*_-l*M)*$,(o*_-f*w+y*M)*$)):this},adjoint:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8],f=t[9],y=t[10],u=t[11],c=t[12],x=t[13],l=t[14],d=t[15];return this.setValues(s*(y*d-u*l)-f*(h*d-v*l)+x*(h*u-v*y),-(e*(y*d-u*l)-f*(a*d-n*l)+x*(a*u-n*y)),e*(h*d-v*l)-s*(a*d-n*l)+x*(a*v-n*h),-(e*(h*u-v*y)-s*(a*u-n*y)+f*(a*v-n*h)),-(i*(y*d-u*l)-o*(h*d-v*l)+c*(h*u-v*y)),r*(y*d-u*l)-o*(a*d-n*l)+c*(a*u-n*y),-(r*(h*d-v*l)-i*(a*d-n*l)+c*(a*v-n*h)),r*(h*u-v*y)-i*(a*u-n*y)+o*(a*v-n*h),i*(f*d-u*x)-o*(s*d-v*x)+c*(s*u-v*f),-(r*(f*d-u*x)-o*(e*d-n*x)+c*(e*u-n*f)),r*(s*d-v*x)-i*(e*d-n*x)+c*(e*v-n*s),-(r*(s*u-v*f)-i*(e*u-n*f)+o*(e*v-n*s)),-(i*(f*l-y*x)-o*(s*l-h*x)+c*(s*y-h*f)),r*(f*l-y*x)-o*(e*l-a*x)+c*(e*y-a*f),-(r*(s*l-h*x)-i*(e*l-a*x)+c*(e*h-a*s)),r*(s*y-h*f)-i*(e*y-a*f)+o*(e*h-a*s))},determinant:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8],f=t[9],y=t[10],u=t[11],c=t[12],x=t[13],l=t[14],d=t[15],M=r*s-e*i,w=r*h-a*i,m=r*v-n*i,_=e*h-a*s,g=e*v-n*s,b=a*v-n*h,I=o*x-f*c,S=o*l-y*c,T=o*d-u*c,z=f*l-y*x,P=f*d-u*x,E=y*d-u*l;return M*E-w*P+m*z+_*T-g*S+b*I},multiply:function(t){var r=this.val,e=r[0],a=r[1],n=r[2],i=r[3],s=r[4],h=r[5],v=r[6],o=r[7],f=r[8],y=r[9],u=r[10],c=r[11],x=r[12],l=r[13],d=r[14],M=r[15],w=t.val,m=w[0],_=w[1],g=w[2],b=w[3];return r[0]=m*e+_*s+g*f+b*x,r[1]=m*a+_*h+g*y+b*l,r[2]=m*n+_*v+g*u+b*d,r[3]=m*i+_*o+g*c+b*M,m=w[4],_=w[5],g=w[6],b=w[7],r[4]=m*e+_*s+g*f+b*x,r[5]=m*a+_*h+g*y+b*l,r[6]=m*n+_*v+g*u+b*d,r[7]=m*i+_*o+g*c+b*M,m=w[8],_=w[9],g=w[10],b=w[11],r[8]=m*e+_*s+g*f+b*x,r[9]=m*a+_*h+g*y+b*l,r[10]=m*n+_*v+g*u+b*d,r[11]=m*i+_*o+g*c+b*M,m=w[12],_=w[13],g=w[14],b=w[15],r[12]=m*e+_*s+g*f+b*x,r[13]=m*a+_*h+g*y+b*l,r[14]=m*n+_*v+g*u+b*d,r[15]=m*i+_*o+g*c+b*M,this},multiplyLocal:function(t){var r=this.val,e=t.val;return this.setValues(r[0]*e[0]+r[1]*e[4]+r[2]*e[8]+r[3]*e[12],r[0]*e[1]+r[1]*e[5]+r[2]*e[9]+r[3]*e[13],r[0]*e[2]+r[1]*e[6]+r[2]*e[10]+r[3]*e[14],r[0]*e[3]+r[1]*e[7]+r[2]*e[11]+r[3]*e[15],r[4]*e[0]+r[5]*e[4]+r[6]*e[8]+r[7]*e[12],r[4]*e[1]+r[5]*e[5]+r[6]*e[9]+r[7]*e[13],r[4]*e[2]+r[5]*e[6]+r[6]*e[10]+r[7]*e[14],r[4]*e[3]+r[5]*e[7]+r[6]*e[11]+r[7]*e[15],r[8]*e[0]+r[9]*e[4]+r[10]*e[8]+r[11]*e[12],r[8]*e[1]+r[9]*e[5]+r[10]*e[9]+r[11]*e[13],r[8]*e[2]+r[9]*e[6]+r[10]*e[10]+r[11]*e[14],r[8]*e[3]+r[9]*e[7]+r[10]*e[11]+r[11]*e[15],r[12]*e[0]+r[13]*e[4]+r[14]*e[8]+r[15]*e[12],r[12]*e[1]+r[13]*e[5]+r[14]*e[9]+r[15]*e[13],r[12]*e[2]+r[13]*e[6]+r[14]*e[10]+r[15]*e[14],r[12]*e[3]+r[13]*e[7]+r[14]*e[11]+r[15]*e[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,r){var e=t.val,a=r.val,n=e[0],i=e[4],s=e[8],h=e[12],v=e[1],o=e[5],f=e[9],y=e[13],u=e[2],c=e[6],x=e[10],l=e[14],d=e[3],M=e[7],w=e[11],m=e[15],_=a[0],g=a[4],b=a[8],I=a[12],S=a[1],T=a[5],z=a[9],P=a[13],E=a[2],$=a[6],L=a[10],C=a[14],A=a[3],G=a[7],B=a[11],H=a[15];return this.setValues(n*_+i*S+s*E+h*A,v*_+o*S+f*E+y*A,u*_+c*S+x*E+l*A,d*_+M*S+w*E+m*A,n*g+i*T+s*$+h*G,v*g+o*T+f*$+y*G,u*g+c*T+x*$+l*G,d*g+M*T+w*$+m*G,n*b+i*z+s*L+h*B,v*b+o*z+f*L+y*B,u*b+c*z+x*L+l*B,d*b+M*z+w*L+m*B,n*I+i*P+s*C+h*H,v*I+o*P+f*C+y*H,u*I+c*P+x*C+l*H,d*I+M*P+w*C+m*H)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,r,e){var a=this.val;return a[12]=a[0]*t+a[4]*r+a[8]*e+a[12],a[13]=a[1]*t+a[5]*r+a[9]*e+a[13],a[14]=a[2]*t+a[6]*r+a[10]*e+a[14],a[15]=a[3]*t+a[7]*r+a[11]*e+a[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,r,e){var a=this.val;return a[0]=a[0]*t,a[1]=a[1]*t,a[2]=a[2]*t,a[3]=a[3]*t,a[4]=a[4]*r,a[5]=a[5]*r,a[6]=a[6]*r,a[7]=a[7]*r,a[8]=a[8]*e,a[9]=a[9]*e,a[10]=a[10]*e,a[11]=a[11]*e,this},makeRotationAxis:function(t,r){var e=Math.cos(r),a=Math.sin(r),n=1-e,i=t.x,s=t.y,h=t.z,v=n*i,o=n*s;return this.setValues(v*i+e,v*s-a*h,v*h+a*s,0,v*s+a*h,o*s+e,o*h-a*i,0,v*h-a*s,o*h+a*i,n*h*h+e,0,0,0,0,1)},rotate:function(t,r){var e=this.val,a=r.x,n=r.y,i=r.z,s=Math.sqrt(a*a+n*n+i*i);if(Math.abs(s)<Ir)return this;s=1/s,a*=s,n*=s,i*=s;var h=Math.sin(t),v=Math.cos(t),o=1-v,f=e[0],y=e[1],u=e[2],c=e[3],x=e[4],l=e[5],d=e[6],M=e[7],w=e[8],m=e[9],_=e[10],g=e[11],b=e[12],I=e[13],S=e[14],T=e[15],z=a*a*o+v,P=n*a*o+i*h,E=i*a*o-n*h,$=a*n*o-i*h,L=n*n*o+v,C=i*n*o+a*h,A=a*i*o+n*h,G=n*i*o-a*h,B=i*i*o+v;return this.setValues(f*z+x*P+w*E,y*z+l*P+m*E,u*z+d*P+_*E,c*z+M*P+g*E,f*$+x*L+w*C,y*$+l*L+m*C,u*$+d*L+_*C,c*$+M*L+g*C,f*A+x*G+w*B,y*A+l*G+m*B,u*A+d*G+_*B,c*A+M*G+g*B,b,I,S,T)},rotateX:function(t){var r=this.val,e=Math.sin(t),a=Math.cos(t),n=r[4],i=r[5],s=r[6],h=r[7],v=r[8],o=r[9],f=r[10],y=r[11];return r[4]=n*a+v*e,r[5]=i*a+o*e,r[6]=s*a+f*e,r[7]=h*a+y*e,r[8]=v*a-n*e,r[9]=o*a-i*e,r[10]=f*a-s*e,r[11]=y*a-h*e,this},rotateY:function(t){var r=this.val,e=Math.sin(t),a=Math.cos(t),n=r[0],i=r[1],s=r[2],h=r[3],v=r[8],o=r[9],f=r[10],y=r[11];return r[0]=n*a-v*e,r[1]=i*a-o*e,r[2]=s*a-f*e,r[3]=h*a-y*e,r[8]=n*e+v*a,r[9]=i*e+o*a,r[10]=s*e+f*a,r[11]=h*e+y*a,this},rotateZ:function(t){var r=this.val,e=Math.sin(t),a=Math.cos(t),n=r[0],i=r[1],s=r[2],h=r[3],v=r[4],o=r[5],f=r[6],y=r[7];return r[0]=n*a+v*e,r[1]=i*a+o*e,r[2]=s*a+f*e,r[3]=h*a+y*e,r[4]=v*a-n*e,r[5]=o*a-i*e,r[6]=f*a-s*e,r[7]=y*a-h*e,this},fromRotationTranslation:function(t,r){var e=t.x,a=t.y,n=t.z,i=t.w,s=e+e,h=a+a,v=n+n,o=e*s,f=e*h,y=e*v,u=a*h,c=a*v,x=n*v,l=i*s,d=i*h,M=i*v;return this.setValues(1-(u+x),f+M,y-d,0,f-M,1-(o+x),c+l,0,y+d,c-l,1-(o+u),0,r.x,r.y,r.z,1)},fromQuat:function(t){var r=t.x,e=t.y,a=t.z,n=t.w,i=r+r,s=e+e,h=a+a,v=r*i,o=r*s,f=r*h,y=e*s,u=e*h,c=a*h,x=n*i,l=n*s,d=n*h;return this.setValues(1-(y+c),o+d,f-l,0,o-d,1-(v+c),u+x,0,f+l,u-x,1-(v+y),0,0,0,0,1)},frustum:function(t,r,e,a,n,i){var s=1/(r-t),h=1/(a-e),v=1/(n-i);return this.setValues(n*2*s,0,0,0,0,n*2*h,0,0,(r+t)*s,(a+e)*h,(i+n)*v,-1,0,0,i*n*2*v,0)},perspective:function(t,r,e,a){var n=1/Math.tan(t/2),i=1/(e-a);return this.setValues(n/r,0,0,0,0,n,0,0,0,0,(a+e)*i,-1,0,0,2*a*e*i,0)},perspectiveLH:function(t,r,e,a){return this.setValues(2*e/t,0,0,0,0,2*e/r,0,0,0,0,-a/(e-a),1,0,0,e*a/(e-a),0)},ortho:function(t,r,e,a,n,i){var s=t-r,h=e-a,v=n-i;return s=s===0?s:1/s,h=h===0?h:1/h,v=v===0?v:1/v,this.setValues(-2*s,0,0,0,0,-2*h,0,0,0,0,2*v,0,(t+r)*s,(a+e)*h,(i+n)*v,1)},lookAtRH:function(t,r,e){var a=this.val;return j.subVectors(t,r),j.getLengthSquared()===0&&(j.z=1),j.normalize(),yt.crossVectors(e,j),yt.getLengthSquared()===0&&(Math.abs(e.z)===1?j.x+=1e-4:j.z+=1e-4,j.normalize(),yt.crossVectors(e,j)),yt.normalize(),Sr.crossVectors(j,yt),a[0]=yt.x,a[1]=yt.y,a[2]=yt.z,a[4]=Sr.x,a[5]=Sr.y,a[6]=Sr.z,a[8]=j.x,a[9]=j.y,a[10]=j.z,this},lookAt:function(t,r,e){var a=t.x,n=t.y,i=t.z,s=e.x,h=e.y,v=e.z,o=r.x,f=r.y,y=r.z;if(Math.abs(a-o)<Ir&&Math.abs(n-f)<Ir&&Math.abs(i-y)<Ir)return this.identity();var u=a-o,c=n-f,x=i-y,l=1/Math.sqrt(u*u+c*c+x*x);u*=l,c*=l,x*=l;var d=h*x-v*c,M=v*u-s*x,w=s*c-h*u;l=Math.sqrt(d*d+M*M+w*w),l?(l=1/l,d*=l,M*=l,w*=l):(d=0,M=0,w=0);var m=c*w-x*M,_=x*d-u*w,g=u*M-c*d;return l=Math.sqrt(m*m+_*_+g*g),l?(l=1/l,m*=l,_*=l,g*=l):(m=0,_=0,g=0),this.setValues(d,m,u,0,M,_,c,0,w,g,x,0,-(d*a+M*n+w*i),-(m*a+_*n+g*i),-(u*a+c*n+x*i),1)},yawPitchRoll:function(t,r,e){this.zero(),zt.zero(),qt.zero();var a=this.val,n=zt.val,i=qt.val,s=Math.sin(e),h=Math.cos(e);return a[10]=1,a[15]=1,a[0]=h,a[1]=s,a[4]=-s,a[5]=h,s=Math.sin(r),h=Math.cos(r),n[0]=1,n[15]=1,n[5]=h,n[10]=h,n[9]=-s,n[6]=s,s=Math.sin(t),h=Math.cos(t),i[5]=1,i[15]=1,i[0]=h,i[2]=-s,i[8]=s,i[10]=h,this.multiplyLocal(zt),this.multiplyLocal(qt),this},setWorldMatrix:function(t,r,e,a,n){return this.yawPitchRoll(t.y,t.x,t.z),zt.scaling(e.x,e.y,e.z),qt.xyz(r.x,r.y,r.z),this.multiplyLocal(zt),this.multiplyLocal(qt),a&&this.multiplyLocal(a),n&&this.multiplyLocal(n),this},multiplyToMat4:function(t,r){var e=this.val,a=t.val,n=e[0],i=e[1],s=e[2],h=e[3],v=e[4],o=e[5],f=e[6],y=e[7],u=e[8],c=e[9],x=e[10],l=e[11],d=e[12],M=e[13],w=e[14],m=e[15],_=a[0],g=a[1],b=a[2],I=a[3],S=a[4],T=a[5],z=a[6],P=a[7],E=a[8],$=a[9],L=a[10],C=a[11],A=a[12],G=a[13],B=a[14],H=a[15];return r.setValues(_*n+g*v+b*u+I*d,g*i+g*o+b*c+I*M,b*s+g*f+b*x+I*w,I*h+g*y+b*l+I*m,S*n+T*v+z*u+P*d,S*i+T*o+z*c+P*M,S*s+T*f+z*x+P*w,S*h+T*y+z*l+P*m,E*n+$*v+L*u+C*d,E*i+$*o+L*c+C*M,E*s+$*f+L*x+C*w,E*h+$*y+L*l+C*m,A*n+G*v+B*u+H*d,A*i+G*o+B*c+H*M,A*s+G*f+B*x+H*w,A*h+G*y+B*l+H*m)},fromRotationXYTranslation:function(t,r,e){var a=r.x,n=r.y,i=r.z,s=Math.sin(t.x),h=Math.cos(t.x),v=Math.sin(t.y),o=Math.cos(t.y),f=a,y=n,u=i,c=-s,x=0-c*v,l=0-h*v,d=c*o,M=h*o;return e||(f=o*a+v*i,y=x*a+h*n+d*i,u=l*a+s*n+M*i),this.setValues(o,x,l,0,0,h,s,0,v,d,M,0,f,y,u,1)},getMaxScaleOnAxis:function(){var t=this.val,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,e,a))}}),zt=new Er,qt=new Er,yt=new $e,Sr=new $e,j=new $e,Ht=Er;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var L1={getTintFromFloats:function(t,r,e,a){var n=(t*255|0)&255,i=(r*255|0)&255,s=(e*255|0)&255,h=(a*255|0)&255;return(h<<24|n<<16|i<<8|s)>>>0},getTintAppendFloatAlpha:function(t,r){var e=(r*255|0)&255;return(e<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,r){var e=(t>>16|0)&255,a=(t>>8|0)&255,n=(t|0)&255,i=(r*255|0)&255;return(i<<24|n<<16|a<<8|e)>>>0},getFloatsFromUintRGB:function(t){var r=(t>>16|0)&255,e=(t>>8|0)&255,a=(t|0)&255;return[r/255,e/255,a/255]},checkShaderMax:function(t,r){var e=Math.min(16,t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));return!r||r===-1?e:Math.min(e,r)},parseFragmentShaderMaxTextures:function(t,r){if(!t)return"";for(var e="",a=0;a<r;a++)a>0&&(e+=`
	else `),a<r-1&&(e+="if (outTexId < "+a+".5)"),e+=`
	{`,e+=`
		texture = texture2D(uMainSampler[`+a+"], outTexCoord);",e+=`
	}`;return t=t.replace(/%count%/gi,r.toString()),t.replace(/%forloop%/gi,e)},setGlowQuality:function(t,r,e,a){return e===void 0&&(e=r.config.glowFXQuality),a===void 0&&(a=r.config.glowFXDistance),t=t.replace(/__SIZE__/gi,(1/e/a).toFixed(7)),t=t.replace(/__DIST__/gi,a.toFixed(0)+".0"),t}};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var G1=Y,B1=L1,Ln=at,F1=new G1({Extends:Ln,initialize:function(r,e,a,n,i,s,h,v,o,f){s===void 0&&(s=16777215),h===void 0&&(h=1),v===void 0&&(v=0),o===void 0&&(o=0),f===void 0&&(f=0),Ln.call(this,r,e,a),this.vx=0,this.vy=0,this.vz=0,this.nx=v,this.ny=o,this.nz=f,this.u=n,this.v=i,this.color=s,this.alpha=h,this.tx=0,this.ty=0,this.ta=0,this.tu=n,this.tv=i},setUVs:function(t,r){return this.u=t,this.v=r,this.tu=t,this.tv=r,this},scrollUV:function(t,r){return this.tu+=t,this.tv+=r,this},scaleUV:function(t,r){return this.tu=this.u*t,this.tv=this.v*r,this},transformCoordinatesLocal:function(t,r,e,a){var n=this.x,i=this.y,s=this.z,h=t.val,v=n*h[0]+i*h[4]+s*h[8]+h[12],o=n*h[1]+i*h[5]+s*h[9]+h[13],f=n*h[2]+i*h[6]+s*h[10]+h[14],y=n*h[3]+i*h[7]+s*h[11]+h[15];this.vx=v/y*r,this.vy=-(o/y)*e,a<=0?this.vz=f/y:this.vz=-(f/y)},resize:function(t,r,e,a,n,i){return this.x=t,this.y=r,this.vx=this.x*e,this.vy=-this.y*a,this.vz=0,n<.5?this.vx+=e*(.5-n):n>.5&&(this.vx-=e*(n-.5)),i<.5?this.vy+=a*(.5-i):i>.5&&(this.vy-=a*(i-.5)),this},update:function(t,r,e,a,n,i,s,h){var v=this.vx*t+this.vy*e+n,o=this.vx*r+this.vy*a+i;return s&&(v=Math.round(v),o=Math.round(o)),this.tx=v,this.ty=o,this.ta=this.alpha*h,this},load:function(t,r,e,a,n){return t[++e]=this.tx,t[++e]=this.ty,t[++e]=this.tu,t[++e]=this.tv,t[++e]=a,t[++e]=n,r[++e]=B1.getTintAppendFloatAlpha(this.color,this.ta),e}}),Ar=F1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gn=Or,D=A1,N1=Ht,Bn=at,pt=Ar,Fn=new Bn,Nn=new Bn,dt=new N1,k1=function(t){var r=D(t,"mesh"),e=D(t,"texture",null),a=D(t,"frame"),n=D(t,"width",1),i=D(t,"height",n),s=D(t,"widthSegments",1),h=D(t,"heightSegments",s),v=D(t,"x",0),o=D(t,"y",0),f=D(t,"z",0),y=D(t,"rotateX",0),u=D(t,"rotateY",0),c=D(t,"rotateZ",0),x=D(t,"zIsUp",!0),l=D(t,"isOrtho",r?r.dirtyCache[11]:!1),d=D(t,"colors",[16777215]),M=D(t,"alphas",[1]),w=D(t,"tile",!1),m=D(t,"flipY",!1),_=D(t,"width",null),g={faces:[],verts:[]};Fn.set(v,o,f),Nn.set(y,u,c),dt.fromRotationXYTranslation(Nn,Fn,x);var b;if(!e&&r)e=r.texture,a||(b=r.frame);else if(r&&typeof e=="string")e=r.scene.sys.textures.get(e);else if(!e)return g;b||(b=e.get(a)),!_&&l&&e&&r&&(n=b.width/r.height,i=b.height/r.height);var I=n/2,S=i/2,T=Math.floor(s),z=Math.floor(h),P=T+1,E=z+1,$=n/T,L=i/z,C=[],A=[],G,B,H=0,er=1,Mt=0,St=1;b&&(H=b.u0,er=b.u1,m?(Mt=b.v1,St=b.v0):(Mt=b.v0,St=b.v1));var tM=er-H,rM=St-Mt;for(B=0;B<E;B++){var eM=B*L-S;for(G=0;G<P;G++){var aM=G*$-I;A.push(aM,-eM);var nM=H+tM*(G/T),iM=Mt+rM*(B/z);C.push(nM,iM)}}Array.isArray(d)||(d=[d]),Array.isArray(M)||(M=[M]);var Dr=0,Vr=0;for(B=0;B<z;B++)for(G=0;G<T;G++){var Yr=(G+P*B)*2,xt=(G+P*(B+1))*2,Ur=(G+1+P*(B+1))*2,lt=(G+1+P*B)*2,At=d[Vr],Rt=M[Dr],Qe=new pt(A[Yr],A[Yr+1],0,C[Yr],C[Yr+1],At,Rt).transformMat4(dt),je=new pt(A[xt],A[xt+1],0,C[xt],C[xt+1],At,Rt).transformMat4(dt),Ke=new pt(A[lt],A[lt+1],0,C[lt],C[lt+1],At,Rt).transformMat4(dt),Je=new pt(A[xt],A[xt+1],0,C[xt],C[xt+1],At,Rt).transformMat4(dt),ta=new pt(A[Ur],A[Ur+1],0,C[Ur],C[Ur+1],At,Rt).transformMat4(dt),ra=new pt(A[lt],A[lt+1],0,C[lt],C[lt+1],At,Rt).transformMat4(dt);w&&(Qe.setUVs(H,St),je.setUVs(H,Mt),Ke.setUVs(er,St),Je.setUVs(H,Mt),ta.setUVs(er,Mt),ra.setUVs(er,St)),Vr++,Vr===d.length&&(Vr=0),Dr++,Dr===M.length&&(Dr=0),g.verts.push(Qe,je,Ke,Je,ta,ra),g.faces.push(new Gn(Qe,je,Ke),new Gn(Je,ta,ra))}return r&&(r.faces=r.faces.concat(g.faces),r.vertices=r.vertices.concat(g.verts)),g},D1=k1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V1=Or,Y1=Ht,kn=at,Ce=Ar,Dn=new kn,Vn=new kn,Rr=new Y1,U1=function(t,r,e,a,n,i,s,h,v,o){e===void 0&&(e=1),a===void 0&&(a=0),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=0),h===void 0&&(h=0),v===void 0&&(v=0),o===void 0&&(o=!0);var f={faces:[],verts:[]},y=t.materials;Dn.set(a,n,i),Vn.set(s,h,v),Rr.fromRotationXYTranslation(Vn,Dn,o);for(var u=0;u<t.models.length;u++)for(var c=t.models[u],x=c.vertices,l=c.textureCoords,d=c.faces,M=0;M<d.length;M++){var w=d[M],m=w.vertices[0],_=w.vertices[1],g=w.vertices[2],b=x[m.vertexIndex],I=x[_.vertexIndex],S=x[g.vertexIndex],T=m.textureCoordsIndex,z=_.textureCoordsIndex,P=g.textureCoordsIndex,E=T===-1?{u:0,v:1}:l[T],$=z===-1?{u:0,v:0}:l[z],L=P===-1?{u:1,v:1}:l[P],C=16777215;w.material!==""&&y[w.material]&&(C=y[w.material]);var A=new Ce(b.x*e,b.y*e,b.z*e,E.u,E.v,C).transformMat4(Rr),G=new Ce(I.x*e,I.y*e,I.z*e,$.u,$.v,C).transformMat4(Rr),B=new Ce(S.x*e,S.y*e,S.z*e,L.u,L.v,C).transformMat4(Rr);f.verts.push(A,G,B),f.faces.push(new V1(A,G,B))}return r&&(r.faces=r.faces.concat(f.faces),r.vertices=r.vertices.concat(f.verts)),f},X1=U1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Z1=Or,Yn=Ar,q1=function(t,r,e,a,n,i,s,h){if(a===void 0&&(a=!1),i===void 0&&(i=16777215),s===void 0&&(s=1),h===void 0&&(h=!1),t.length!==r.length&&!a){console.warn("GenerateVerts: vertices and uvs count not equal");return}var v={faces:[],vertices:[]},o,f,y,u,c,x,l,d,M,w,m,_=a?3:2,g=Array.isArray(i),b=Array.isArray(s);if(Array.isArray(e)&&e.length>0)for(o=0;o<e.length;o++){var I=e[o],S=e[o]*2,T=e[o]*_;f=t[T],y=t[T+1],u=a?t[T+2]:0,c=r[S],x=r[S+1],h&&(x=1-x),l=g?i[I]:i,d=b?s[I]:s,M=0,w=0,m=0,n&&(M=n[T],w=n[T+1],m=a?n[T+2]:0),v.vertices.push(new Yn(f,y,u,c,x,l,d,M,w,m))}else{var z=0,P=0;for(o=0;o<t.length;o+=_)f=t[o],y=t[o+1],u=a?t[o+2]:0,c=r[z],x=r[z+1],l=g?i[P]:i,d=b?s[P]:s,M=0,w=0,m=0,n&&(M=n[o],w=n[o+1],m=a?n[o+2]:0),v.vertices.push(new Yn(f,y,u,c,x,l,d,M,w,m)),z+=2,P++}for(o=0;o<v.vertices.length;o+=3){var E=v.vertices[o],$=v.vertices[o+1],L=v.vertices[o+2];v.faces.push(new Z1(E,$,L))}return v},H1=q1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Un=!0,Xn="untitled",Wt="",Pe="";function W1(t){var r=t.indexOf("#");return r>-1?t.substring(0,r):t}function Qt(t){return t.models.length===0&&t.models.push({faces:[],name:Xn,textureCoords:[],vertexNormals:[],vertices:[]}),Wt="",t.models[t.models.length-1]}function Q1(t,r){var e=t.length>=2?t[1]:Xn;r.models.push({faces:[],name:e,textureCoords:[],vertexNormals:[],vertices:[]}),Wt=""}function j1(t){t.length===2&&(Wt=t[1])}function K1(t,r){var e=t.length,a=e>=2?parseFloat(t[1]):0,n=e>=3?parseFloat(t[2]):0,i=e>=4?parseFloat(t[3]):0;Qt(r).vertices.push({x:a,y:n,z:i})}function J1(t,r){var e=t.length,a=e>=2?parseFloat(t[1]):0,n=e>=3?parseFloat(t[2]):0,i=e>=4?parseFloat(t[3]):0;isNaN(a)&&(a=0),isNaN(n)&&(n=0),isNaN(i)&&(i=0),Un&&(n=1-n),Qt(r).textureCoords.push({u:a,v:n,w:i})}function ty(t,r){var e=t.length,a=e>=2?parseFloat(t[1]):0,n=e>=3?parseFloat(t[2]):0,i=e>=4?parseFloat(t[3]):0;Qt(r).vertexNormals.push({x:a,y:n,z:i})}function ry(t,r){var e=t.length-1;if(!(e<3)){for(var a={group:Wt,material:Pe,vertices:[]},n=0;n<e;n++){var i=t[n+1],s=i.split("/"),h=s.length;if(!(h<1||h>3)){var v=0,o=0,f=0;v=parseInt(s[0],10),h>1&&s[1]!==""&&(o=parseInt(s[1],10)),h>2&&(f=parseInt(s[2],10)),v!==0&&(v<0&&(v=Qt(r).vertices.length+1+v),o-=1,v-=1,f-=1,a.vertices.push({textureCoordsIndex:o,vertexIndex:v,vertexNormalIndex:f}))}}Qt(r).faces.push(a)}}function ey(t,r){t.length>=2&&r.materialLibraries.push(t[1])}function ay(t){t.length>=2&&(Pe=t[1])}var ny=function(t,r){r===void 0&&(r=!0),Un=r;var e={materials:{},materialLibraries:[],models:[]};Wt="",Pe="";for(var a=t.split(`
`),n=0;n<a.length;n++){var i=W1(a[n]),s=i.replace(/\s\s+/g," ").trim().split(" ");switch(s[0].toLowerCase()){case"o":Q1(s,e);break;case"g":j1(s);break;case"v":K1(s,e);break;case"vt":J1(s,e);break;case"vn":ty(s,e);break;case"f":ry(s,e);break;case"mtllib":ey(s,e);break;case"usemtl":ay(s);break}}return e},iy=ny;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sy=function(t,r,e){return t<<16|r<<8|e},hy=sy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vy=hy,oy=function(t){for(var r={},e=t.split(`
`),a="",n=0;n<e.length;n++){var i=e[n].trim();if(!(i.indexOf("#")===0||i==="")){var s=i.replace(/\s\s+/g," ").trim().split(" ");switch(s[0].toLowerCase()){case"newmtl":{a=s[1];break}case"kd":{var h=Math.floor(s[1]*255),v=s.length>=2?Math.floor(s[2]*255):h,o=s.length>=3?Math.floor(s[3]*255):h;r[a]=vy(h,v,o);break}}}}return r},fy=oy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uy=function(t,r,e,a){var n,i;if(e===void 0&&a===void 0){var s=t.getInCenter();n=s.x,i=s.y}var h=Math.cos(r),v=Math.sin(r),o=t.vertex1,f=t.vertex2,y=t.vertex3,u=o.x-n,c=o.y-i;o.set(u*h-c*v+n,u*v+c*h+i),u=f.x-n,c=f.y-i,f.set(u*h-c*v+n,u*v+c*h+i),u=y.x-n,c=y.y-i,y.set(u*h-c*v+n,u*v+c*h+i)},yy=uy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cy={Face:Or,GenerateGridVerts:D1,GenerateObjVerts:X1,GenerateVerts:H1,ParseObj:iy,ParseObjMaterial:fy,RotateFace:yy,Vertex:Ar},xy=cy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ly=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))},dy=ly;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var my=O,My=function(t){return new my(t.x,t.y)},wy=My;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _y=function(t,r){return r.setTo(t.x,t.y)},gy=_y;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var by=function(t,r){return t.x===r.x&&t.y===r.y},$y=by;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cy=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))},Py=Cy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ty=O,zy=function(t,r){if(r===void 0&&(r=new Ty),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var e=t.length;if(e<1)throw new Error("GetCentroid points array must not be empty");if(e===1)r.x=t[0].x,r.y=t[0].y;else{for(var a=0;a<e;a++)r.x+=t[a].x,r.y+=t[a].y;r.x/=e,r.y/=e}return r},py=zy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oy=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},Zn=Oy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Iy=function(t){return t.x*t.x+t.y*t.y},qn=Iy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ey=tt,Sy=function(t,r){r===void 0&&(r=new Ey);for(var e=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,s=0;s<t.length;s++){var h=t[s];h.x>e&&(e=h.x),h.x<a&&(a=h.x),h.y>n&&(n=h.y),h.y<i&&(i=h.y)}return r.x=a,r.y=i,r.width=e-a,r.height=n-i,r},Ay=Sy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ry=O,Ly=function(t,r,e,a){return e===void 0&&(e=0),a===void 0&&(a=new Ry),a.x=t.x+(r.x-t.x)*e,a.y=t.y+(r.y-t.y)*e,a},Gy=Ly;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var By=function(t){return t.setTo(t.y,t.x)},Fy=By;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ny=O,ky=function(t,r){return r===void 0&&(r=new Ny),r.setTo(-t.x,-t.y)},Dy=ky;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vy=O,Yy=qn,Uy=function(t,r,e){e===void 0&&(e=new Vy);var a=t.x*r.x+t.y*r.y,n=a/Yy(r);return n!==0&&(e.x=n*r.x,e.y=n*r.y),e},Xy=Uy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zy=O,qy=function(t,r,e){e===void 0&&(e=new Zy);var a=t.x*r.x+t.y*r.y;return a!==0&&(e.x=a*r.x,e.y=a*r.y),e},Hy=qy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wy=Zn,Qy=function(t,r){if(t.x!==0||t.y!==0){var e=Wy(t);t.x/=e,t.y/=e}return t.x*=r,t.y*=r,t},jy=Qy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q=O;q.Ceil=dy,q.Clone=wy,q.CopyFrom=gy,q.Equals=$y,q.Floor=Py,q.GetCentroid=py,q.GetMagnitude=Zn,q.GetMagnitudeSq=qn,q.GetRectangleFromPoints=Ay,q.Interpolate=Gy,q.Invert=Fy,q.Negative=Dy,q.Project=Xy,q.ProjectUnit=Hy,q.SetMagnitude=jy;var Ky=q;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jy=function(t,r,e){for(var a=!1,n=-1,i=t.points.length-1;++n<t.points.length;i=n){var s=t.points[n].x,h=t.points[n].y,v=t.points[i].x,o=t.points[i].y;(h<=e&&e<o||o<=e&&e<h)&&r<(v-s)*(e-h)/(o-h)+s&&(a=!a)}return a},Te=Jy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var t0=ft,r0=ut,e0=function(t){for(var r=t.points,e=0,a=0;a<r.length;a++){var n=r[a],i=r[(a+1)%r.length],s=new r0(n.x,n.y,i.x,i.y);e+=t0(s)}return e},Hn=e0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var a0=ft,n0=ut,i0=Hn,s0=function(t,r,e,a){a===void 0&&(a=[]);var n=t.points,i=i0(t);!r&&e>0&&(r=i/e);for(var s=0;s<r;s++)for(var h=i*(s/r),v=0,o=0;o<n.length;o++){var f=n[o],y=n[(o+1)%n.length],u=new n0(f.x,f.y,y.x,y.y),c=a0(u);if(h<v||h>v+c){v+=c;continue}var x=u.getPoint((h-v)/c);a.push(x);break}return a},Wn=s0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var h0=Y,v0=Te,o0=Wn,f0=ot,u0=new h0({initialize:function(r){this.type=f0.POLYGON,this.area=0,this.points=[],r&&this.setTo(r)},contains:function(t,r){return v0(this,t,r)},setTo:function(t){if(this.area=0,this.points=[],typeof t=="string"&&(t=t.split(" ")),!Array.isArray(t))return this;for(var r,e=0;e<t.length;e++)r={x:0,y:0},typeof t[e]=="number"||typeof t[e]=="string"?(r.x=parseFloat(t[e]),r.y=parseFloat(t[e+1]),e++):Array.isArray(t[e])?(r.x=t[e][0],r.y=t[e][1]):(r.x=t[e].x,r.y=t[e].y),this.points.push(r);return this.calculateArea(),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t=0,r,e,a=0;a<this.points.length-1;a++)r=this.points[a],e=this.points[a+1],t+=(e.x-r.x)*(r.y+e.y);return r=this.points[0],e=this.points[this.points.length-1],t+=(r.x-e.x)*(e.y+r.y),this.area=-t*.5,this.area},getPoints:function(t,r,e){return o0(this,t,r,e)}}),Qn=u0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y0=Qn,c0=function(t){return new y0(t.points)},x0=c0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l0=Te,d0=function(t,r){return l0(t,r.x,r.y)},m0=d0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function ze(t,r,e){e=e||2;var a=r&&r.length,n=a?r[0]*e:t.length,i=jn(t,0,n,e,!0),s=[];if(!i||i.next===i.prev)return s;var h,v,o,f,y,u,c;if(a&&(i=b0(t,r,i,e)),t.length>80*e){h=o=t[0],v=f=t[1];for(var x=e;x<n;x+=e)y=t[x],u=t[x+1],y<h&&(h=y),u<v&&(v=u),y>o&&(o=y),u>f&&(f=u);c=Math.max(o-h,f-v),c=c!==0?32767/c:0}return jt(i,s,e,h,v,c,0),s}function jn(t,r,e,a,n){var i,s;if(n===Ie(t,r,e,a)>0)for(i=r;i<e;i+=a)s=ti(i,t[i],t[i+1],s);else for(i=e-a;i>=r;i-=a)s=ti(i,t[i],t[i+1],s);return s&&Lr(s,s.next)&&(Jt(s),s=s.next),s}function mt(t,r){if(!t)return t;r||(r=t);var e=t,a;do if(a=!1,!e.steiner&&(Lr(e,e.next)||k(e.prev,e,e.next)===0)){if(Jt(e),e=r=e.prev,e===e.next)break;a=!0}else e=e.next;while(a||e!==r);return r}function jt(t,r,e,a,n,i,s){if(t){!s&&i&&z0(t,a,n,i);for(var h=t,v,o;t.prev!==t.next;){if(v=t.prev,o=t.next,i?w0(t,a,n,i):M0(t)){r.push(v.i/e|0),r.push(t.i/e|0),r.push(o.i/e|0),Jt(t),t=o.next,h=o.next;continue}if(t=o,t===h){s?s===1?(t=_0(mt(t),r,e),jt(t,r,e,a,n,i,2)):s===2&&g0(t,r,e,a,n,i):jt(mt(t),r,e,a,n,i,1);break}}}}function M0(t){var r=t.prev,e=t,a=t.next;if(k(r,e,a)>=0)return!1;for(var n=r.x,i=e.x,s=a.x,h=r.y,v=e.y,o=a.y,f=n<i?n<s?n:s:i<s?i:s,y=h<v?h<o?h:o:v<o?v:o,u=n>i?n>s?n:s:i>s?i:s,c=h>v?h>o?h:o:v>o?v:o,x=a.next;x!==r;){if(x.x>=f&&x.x<=u&&x.y>=y&&x.y<=c&&Ot(n,h,i,v,s,o,x.x,x.y)&&k(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function w0(t,r,e,a){var n=t.prev,i=t,s=t.next;if(k(n,i,s)>=0)return!1;for(var h=n.x,v=i.x,o=s.x,f=n.y,y=i.y,u=s.y,c=h<v?h<o?h:o:v<o?v:o,x=f<y?f<u?f:u:y<u?y:u,l=h>v?h>o?h:o:v>o?v:o,d=f>y?f>u?f:u:y>u?y:u,M=pe(c,x,r,e,a),w=pe(l,d,r,e,a),m=t.prevZ,_=t.nextZ;m&&m.z>=M&&_&&_.z<=w;){if(m.x>=c&&m.x<=l&&m.y>=x&&m.y<=d&&m!==n&&m!==s&&Ot(h,f,v,y,o,u,m.x,m.y)&&k(m.prev,m,m.next)>=0||(m=m.prevZ,_.x>=c&&_.x<=l&&_.y>=x&&_.y<=d&&_!==n&&_!==s&&Ot(h,f,v,y,o,u,_.x,_.y)&&k(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;m&&m.z>=M;){if(m.x>=c&&m.x<=l&&m.y>=x&&m.y<=d&&m!==n&&m!==s&&Ot(h,f,v,y,o,u,m.x,m.y)&&k(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;_&&_.z<=w;){if(_.x>=c&&_.x<=l&&_.y>=x&&_.y<=d&&_!==n&&_!==s&&Ot(h,f,v,y,o,u,_.x,_.y)&&k(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function _0(t,r,e){var a=t;do{var n=a.prev,i=a.next.next;!Lr(n,i)&&Kn(n,a,a.next,i)&&Kt(n,i)&&Kt(i,n)&&(r.push(n.i/e|0),r.push(a.i/e|0),r.push(i.i/e|0),Jt(a),Jt(a.next),a=t=i),a=a.next}while(a!==t);return mt(a)}function g0(t,r,e,a,n,i){var s=t;do{for(var h=s.next.next;h!==s.prev;){if(s.i!==h.i&&I0(s,h)){var v=Jn(s,h);s=mt(s,s.next),v=mt(v,v.next),jt(s,r,e,a,n,i,0),jt(v,r,e,a,n,i,0);return}h=h.next}s=s.next}while(s!==t)}function b0(t,r,e,a){var n=[],i,s,h,v,o;for(i=0,s=r.length;i<s;i++)h=r[i]*a,v=i<s-1?r[i+1]*a:t.length,o=jn(t,h,v,a,!1),o===o.next&&(o.steiner=!0),n.push(O0(o));for(n.sort($0),i=0;i<n.length;i++)e=C0(n[i],e);return e}function $0(t,r){return t.x-r.x}function C0(t,r){var e=P0(t,r);if(!e)return r;var a=Jn(e,t);return mt(a,a.next),mt(e,e.next)}function P0(t,r){var e=r,a=t.x,n=t.y,i=-1/0,s;do{if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){var h=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=a&&h>i&&(i=h,s=e.x<e.next.x?e:e.next,h===a))return s}e=e.next}while(e!==r);if(!s)return null;var v=s,o=s.x,f=s.y,y=1/0,u;e=s;do a>=e.x&&e.x>=o&&a!==e.x&&Ot(n<f?a:i,n,o,f,n<f?i:a,n,e.x,e.y)&&(u=Math.abs(n-e.y)/(a-e.x),Kt(e,t)&&(u<y||u===y&&(e.x>s.x||e.x===s.x&&T0(s,e)))&&(s=e,y=u)),e=e.next;while(e!==v);return s}function T0(t,r){return k(t.prev,t,r.prev)<0&&k(r.next,t,t.next)<0}function z0(t,r,e,a){var n=t;do n.z===0&&(n.z=pe(n.x,n.y,r,e,a)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,p0(n)}function p0(t){var r,e,a,n,i,s,h,v,o=1;do{for(e=t,t=null,i=null,s=0;e;){for(s++,a=e,h=0,r=0;r<o&&(h++,a=a.nextZ,!!a);r++);for(v=o;h>0||v>0&&a;)h!==0&&(v===0||!a||e.z<=a.z)?(n=e,e=e.nextZ,h--):(n=a,a=a.nextZ,v--),i?i.nextZ=n:t=n,n.prevZ=i,i=n;e=a}i.nextZ=null,o*=2}while(s>1);return t}function pe(t,r,e,a,n){return t=(t-e)*n|0,r=(r-a)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t|r<<1}function O0(t){var r=t,e=t;do(r.x<e.x||r.x===e.x&&r.y<e.y)&&(e=r),r=r.next;while(r!==t);return e}function Ot(t,r,e,a,n,i,s,h){return(n-s)*(r-h)>=(t-s)*(i-h)&&(t-s)*(a-h)>=(e-s)*(r-h)&&(e-s)*(i-h)>=(n-s)*(a-h)}function I0(t,r){return t.next.i!==r.i&&t.prev.i!==r.i&&!E0(t,r)&&(Kt(t,r)&&Kt(r,t)&&S0(t,r)&&(k(t.prev,t,r.prev)||k(t,r.prev,r))||Lr(t,r)&&k(t.prev,t,t.next)>0&&k(r.prev,r,r.next)>0)}function k(t,r,e){return(r.y-t.y)*(e.x-r.x)-(r.x-t.x)*(e.y-r.y)}function Lr(t,r){return t.x===r.x&&t.y===r.y}function Kn(t,r,e,a){var n=Br(k(t,r,e)),i=Br(k(t,r,a)),s=Br(k(e,a,t)),h=Br(k(e,a,r));return!!(n!==i&&s!==h||n===0&&Gr(t,e,r)||i===0&&Gr(t,a,r)||s===0&&Gr(e,t,a)||h===0&&Gr(e,r,a))}function Gr(t,r,e){return r.x<=Math.max(t.x,e.x)&&r.x>=Math.min(t.x,e.x)&&r.y<=Math.max(t.y,e.y)&&r.y>=Math.min(t.y,e.y)}function Br(t){return t>0?1:t<0?-1:0}function E0(t,r){var e=t;do{if(e.i!==t.i&&e.next.i!==t.i&&e.i!==r.i&&e.next.i!==r.i&&Kn(e,e.next,t,r))return!0;e=e.next}while(e!==t);return!1}function Kt(t,r){return k(t.prev,t,t.next)<0?k(t,r,t.next)>=0&&k(t,t.prev,r)>=0:k(t,r,t.prev)<0||k(t,t.next,r)<0}function S0(t,r){var e=t,a=!1,n=(t.x+r.x)/2,i=(t.y+r.y)/2;do e.y>i!=e.next.y>i&&e.next.y!==e.y&&n<(e.next.x-e.x)*(i-e.y)/(e.next.y-e.y)+e.x&&(a=!a),e=e.next;while(e!==t);return a}function Jn(t,r){var e=new Oe(t.i,t.x,t.y),a=new Oe(r.i,r.x,r.y),n=t.next,i=r.prev;return t.next=r,r.prev=t,e.next=n,n.prev=e,a.next=e,e.prev=a,i.next=a,a.prev=i,a}function ti(t,r,e,a){var n=new Oe(t,r,e);return a?(n.next=a.next,n.prev=a,a.next.prev=n,a.next=n):(n.prev=n,n.next=n),n}function Jt(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Oe(t,r,e){this.i=t,this.x=r,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ze.deviation=function(t,r,e,a){var n=r&&r.length,i=n?r[0]*e:t.length,s=Math.abs(Ie(t,0,i,e));if(n)for(var h=0,v=r.length;h<v;h++){var o=r[h]*e,f=h<v-1?r[h+1]*e:t.length;s-=Math.abs(Ie(t,o,f,e))}var y=0;for(h=0;h<a.length;h+=3){var u=a[h]*e,c=a[h+1]*e,x=a[h+2]*e;y+=Math.abs((t[u]-t[x])*(t[c+1]-t[u+1])-(t[u]-t[c])*(t[x+1]-t[u+1]))}return s===0&&y===0?0:Math.abs((y-s)/s)};function Ie(t,r,e,a){for(var n=0,i=r,s=e-a;i<e;i+=a)n+=(t[s]-t[i])*(t[i+1]+t[s+1]),s=i;return n}ze.flatten=function(t){for(var r=t[0][0].length,e={vertices:[],holes:[],dimensions:r},a=0,n=0;n<t.length;n++){for(var i=0;i<t[n].length;i++)for(var s=0;s<r;s++)e.vertices.push(t[n][i][s]);n>0&&(a+=t[n-1].length,e.holes.push(a))}return e};var ri=ze;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var A0=tt,R0=function(t,r){r===void 0&&(r=new A0);for(var e=1/0,a=1/0,n=-e,i=-a,s,h=0;h<t.points.length;h++)s=t.points[h],e=Math.min(e,s.x),a=Math.min(a,s.y),n=Math.max(n,s.x),i=Math.max(i,s.y);return r.x=e,r.y=a,r.width=n-e,r.height=i-a,r},L0=R0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var G0=function(t,r){r===void 0&&(r=[]);for(var e=0;e<t.points.length;e++)r.push(t.points[e].x),r.push(t.points[e].y);return r},B0=G0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F0=function(t){return t.points.reverse(),t},N0=F0;function k0(t,r){var e=t.x-r.x,a=t.y-r.y;return e*e+a*a}function D0(t,r,e){var a=r.x,n=r.y,i=e.x-a,s=e.y-n;if(i!==0||s!==0){var h=((t.x-a)*i+(t.y-n)*s)/(i*i+s*s);h>1?(a=e.x,n=e.y):h>0&&(a+=i*h,n+=s*h)}return i=t.x-a,s=t.y-n,i*i+s*s}function V0(t,r){for(var e=t[0],a=[e],n,i=1,s=t.length;i<s;i++)n=t[i],k0(n,e)>r&&(a.push(n),e=n);return e!==n&&a.push(n),a}function Ee(t,r,e,a,n){for(var i=a,s,h=r+1;h<e;h++){var v=D0(t[h],t[r],t[e]);v>i&&(s=h,i=v)}i>a&&(s-r>1&&Ee(t,r,s,a,n),n.push(t[s]),e-s>1&&Ee(t,s,e,a,n))}function Y0(t,r){var e=t.length-1,a=[t[0]];return Ee(t,0,e,r,a),a.push(t[e]),a}var U0=function(t,r,e){r===void 0&&(r=1),e===void 0&&(e=!1);var a=t.points;if(a.length>2){var n=r*r;e||(a=V0(a,n)),t.setTo(Y0(a,n))}return t},X0=U0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ei=function(t,r){return t[0]=r[0],t[1]=r[1],t},Z0=function(t){var r,e=[],a=t.points;for(r=0;r<a.length;r++)e.push([a[r].x,a[r].y]);var n=[];for(e.length>0&&n.push(ei([0,0],e[0])),r=0;r<e.length-1;r++){var i=e[r],s=e[r+1],h=i[0],v=i[1],o=s[0],f=s[1];n.push([.85*h+.15*o,.85*v+.15*f]),n.push([.15*h+.85*o,.15*v+.85*f])}return e.length>1&&n.push(ei([0,0],e[e.length-1])),t.setTo(n)},q0=Z0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H0=function(t,r,e){for(var a=t.points,n=0;n<a.length;n++)a[n].x+=r,a[n].y+=e;return t},W0=H0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var K=Qn;K.Clone=x0,K.Contains=Te,K.ContainsPoint=m0,K.Earcut=ri,K.GetAABB=L0,K.GetNumberArray=B0,K.GetPoints=Wn,K.Perimeter=Hn,K.Reverse=N0,K.Simplify=X0,K.Smooth=q0,K.Translate=W0;var Q0=K;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var j0=function(t){return t.width*t.height},K0=j0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var J0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t},tc=J0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rc=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t},ec=rc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ac=function(t,r,e){return t.x=r-t.width/2,t.y=e-t.height/2,t},ai=ac;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nc=tt,ic=function(t){return new nc(t.x,t.y,t.width,t.height)},sc=ic;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hc=fr,vc=function(t,r){return hc(t,r.x,r.y)},oc=vc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fc=function(t,r){return r.width*r.height>t.width*t.height?!1:r.x>t.x&&r.x<t.right&&r.right>t.x&&r.right<t.right&&r.y>t.y&&r.y<t.bottom&&r.bottom>t.y&&r.bottom<t.bottom},ni=fc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uc=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},yc=uc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cc=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},xc=cc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lc=function(t){return t.height===0?NaN:t.width/t.height},Se=lc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ii=Se,dc=function(t,r){var e=ii(t);return e<ii(r)?t.setSize(r.height*e,r.height):t.setSize(r.width,r.width/e),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},mc=dc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var si=Se,Mc=function(t,r){var e=si(t);return e>si(r)?t.setSize(r.height*e,r.height):t.setSize(r.width,r.width/e),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},wc=Mc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _c=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t},gc=_c;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bc=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t},$c=bc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cc=tt,hi=W,Pc=function(t,r){if(r===void 0&&(r=new Cc),t.length===0)return r;for(var e=Number.MAX_VALUE,a=Number.MAX_VALUE,n=hi.MIN_SAFE_INTEGER,i=hi.MIN_SAFE_INTEGER,s,h,v,o=0;o<t.length;o++)s=t[o],Array.isArray(s)?(h=s[0],v=s[1]):(h=s.x,v=s.y),e=Math.min(e,h),a=Math.min(a,v),n=Math.max(n,h),i=Math.max(i,v);return r.x=e,r.y=a,r.width=n-e,r.height=i-a,r},Tc=Pc;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zc=tt,pc=function(t,r,e,a,n){return n===void 0&&(n=new zc),n.setTo(Math.min(t,e),Math.min(r,a),Math.abs(t-e),Math.abs(r-a))},Oc=pc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ic=O,Ec=function(t,r){return r===void 0&&(r=new Ic),r.x=t.centerX,r.y=t.centerY,r},Sc=Ec;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ac=O,Rc=function(t,r){return r===void 0&&(r=new Ac),r.x=t.width,r.y=t.height,r},Lc=Rc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gc=ai,Bc=function(t,r,e){var a=t.centerX,n=t.centerY;return t.setSize(t.width+r*2,t.height+e*2),Gc(t,a,n)},Fc=Bc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nc=tt,kc=wr,Dc=function(t,r,e){return e===void 0&&(e=new Nc),kc(t,r)?(e.x=Math.max(t.x,r.x),e.y=Math.max(t.y,r.y),e.width=Math.min(t.right,r.right)-e.x,e.height=Math.min(t.bottom,r.bottom)-e.y):e.setEmpty(),e},Vc=Dc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vi=ur,Yc=O,Uc=function(t,r,e,a){if(a===void 0&&(a=[]),!r&&!e)return a;r?e=Math.round(vi(t)/r):r=vi(t)/e;for(var n=t.x,i=t.y,s=0,h=0;h<e;h++)switch(a.push(new Yc(n,i)),s){case 0:n+=r,n>=t.right&&(s=1,i+=n-t.right,n=t.right);break;case 1:i+=r,i>=t.bottom&&(s=2,n-=i-t.bottom,i=t.bottom);break;case 2:n-=r,n<=t.left&&(s=3,i-=t.left-n,n=t.left);break;case 3:i-=r,i<=t.top&&(s=0,i=t.top);break}return a},Xc=Uc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zc=function(t,r){for(var e=t.x,a=t.right,n=t.y,i=t.bottom,s=0;s<r.length;s++)e=Math.min(e,r[s].x),a=Math.max(a,r[s].x),n=Math.min(n,r[s].y),i=Math.max(i,r[s].y);return t.x=e,t.y=n,t.width=a-e,t.height=i-n,t},qc=Zc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hc=function(t,r){var e=Math.min(t.x,r.x),a=Math.max(t.right,r.right);t.x=e,t.width=a-e;var n=Math.min(t.y,r.y),i=Math.max(t.bottom,r.bottom);return t.y=n,t.height=i-n,t},Wc=Hc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qc=function(t,r,e){var a=Math.min(t.x,r),n=Math.max(t.right,r);t.x=a,t.width=n-a;var i=Math.min(t.y,e),s=Math.max(t.bottom,e);return t.y=i,t.height=s-i,t},jc=Qc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kc=function(t,r,e){return t.x+=r,t.y+=e,t},Jc=Kc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tx=function(t,r){return t.x+=r.x,t.y+=r.y,t},rx=tx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ex=function(t,r){return t.x<r.right&&t.right>r.x&&t.y<r.bottom&&t.bottom>r.y},ax=ex;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nx=W,ix=function(t){return t*nx.DEG_TO_RAD},oi=ix;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sx=O,hx=oi,vx=function(t,r,e){e===void 0&&(e=new sx),r=hx(r);var a=Math.sin(r),n=Math.cos(r),i=n>0?t.width/2:t.width/-2,s=a>0?t.height/2:t.height/-2;return Math.abs(i*a)<Math.abs(s*n)?s=i*a/n:i=s*n/a,e.x=i+t.centerX,e.y=s+t.centerY,e},ox=vx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fx=function(t,r){return Math.floor(Math.random()*(r-t+1)+t)},fi=fx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ux=fi,yx=ni,cx=O,xx=function(t,r,e){if(e===void 0&&(e=new cx),yx(t,r))switch(ux(0,3)){case 0:e.x=t.x+Math.random()*(r.right-t.x),e.y=t.y+Math.random()*(r.top-t.y);break;case 1:e.x=r.x+Math.random()*(t.right-r.x),e.y=r.bottom+Math.random()*(t.bottom-r.bottom);break;case 2:e.x=t.x+Math.random()*(r.x-t.x),e.y=r.y+Math.random()*(t.bottom-r.y);break;case 3:e.x=r.right+Math.random()*(t.right-r.right),e.y=t.y+Math.random()*(r.bottom-t.y);break}return e},lx=xx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dx=function(t,r){return t.width===r.width&&t.height===r.height},mx=dx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mx=function(t,r,e){return e===void 0&&(e=r),t.width*=r,t.height*=e,t},wx=Mx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _x=tt,gx=function(t,r,e){e===void 0&&(e=new _x);var a=Math.min(t.x,r.x),n=Math.min(t.y,r.y),i=Math.max(t.right,r.right)-a,s=Math.max(t.bottom,r.bottom)-n;return e.setTo(a,n,i,s)},bx=gx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var p=tt;p.Area=K0,p.Ceil=tc,p.CeilAll=ec,p.CenterOn=ai,p.Clone=sc,p.Contains=fr,p.ContainsPoint=oc,p.ContainsRect=ni,p.CopyFrom=yc,p.Decompose=vn,p.Equals=xc,p.FitInside=mc,p.FitOutside=wc,p.Floor=gc,p.FloorAll=$c,p.FromPoints=Tc,p.FromXY=Oc,p.GetAspectRatio=Se,p.GetCenter=Sc,p.GetPoint=ne,p.GetPoints=Fa,p.GetSize=Lc,p.Inflate=Fc,p.Intersection=Vc,p.MarchingAnts=Xc,p.MergePoints=qc,p.MergeRect=Wc,p.MergeXY=jc,p.Offset=Jc,p.OffsetPoint=rx,p.Overlaps=ax,p.Perimeter=ur,p.PerimeterPoint=ox,p.Random=Xa,p.RandomOutside=lx,p.SameDimensions=mx,p.Scale=wx,p.Union=bx;var $x=p;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cx=O,Ae=ft,Px=function(t,r,e){e===void 0&&(e=new Cx);var a=t.getLineA(),n=t.getLineB(),i=t.getLineC();if(r<=0||r>=1)return e.x=a.x1,e.y=a.y1,e;var s=Ae(a),h=Ae(n),v=Ae(i),o=s+h+v,f=o*r,y=0;return f<s?(y=f/s,e.x=a.x1+(a.x2-a.x1)*y,e.y=a.y1+(a.y2-a.y1)*y):f>s+h?(f-=s+h,y=f/v,e.x=i.x1+(i.x2-i.x1)*y,e.y=i.y1+(i.y2-i.y1)*y):(f-=s,y=f/h,e.x=n.x1+(n.x2-n.x1)*y,e.y=n.y1+(n.y2-n.y1)*y),e},ui=Px;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Re=ft,Tx=O,zx=function(t,r,e,a){a===void 0&&(a=[]);var n=t.getLineA(),i=t.getLineB(),s=t.getLineC(),h=Re(n),v=Re(i),o=Re(s),f=h+v+o;!r&&e>0&&(r=f/e);for(var y=0;y<r;y++){var u=f*(y/r),c=0,x=new Tx;u<h?(c=u/h,x.x=n.x1+(n.x2-n.x1)*c,x.y=n.y1+(n.y2-n.y1)*c):u>h+v?(u-=h+v,c=u/o,x.x=s.x1+(s.x2-s.x1)*c,x.y=s.y1+(s.y2-s.y1)*c):(u-=h,c=u/v,x.x=i.x1+(i.x2-i.x1)*c,x.y=i.y1+(i.y2-i.y1)*c),a.push(x)}return a},yi=zx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var px=O,Ox=function(t,r){r===void 0&&(r=new px);var e=t.x2-t.x1,a=t.y2-t.y1,n=t.x3-t.x1,i=t.y3-t.y1,s=Math.random(),h=Math.random();return s+h>=1&&(s=1-s,h=1-h),r.x=t.x1+(e*s+n*h),r.y=t.y1+(a*s+i*h),r},ci=Ox;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ix=Y,Ex=gr,Sx=ui,Ax=yi,Rx=ot,Le=ut,Lx=ci,Gx=new Ix({initialize:function(r,e,a,n,i,s){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=0),this.type=Rx.TRIANGLE,this.x1=r,this.y1=e,this.x2=a,this.y2=n,this.x3=i,this.y3=s},contains:function(t,r){return Ex(this,t,r)},getPoint:function(t,r){return Sx(this,t,r)},getPoints:function(t,r,e){return Ax(this,t,r,e)},getRandomPoint:function(t){return Lx(this,t)},setTo:function(t,r,e,a,n,i){return t===void 0&&(t=0),r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x1=t,this.y1=r,this.x2=e,this.y2=a,this.x3=n,this.y3=i,this},getLineA:function(t){return t===void 0&&(t=new Le),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return t===void 0&&(t=new Le),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return t===void 0&&(t=new Le),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1<=this.x2&&this.x1<=this.x3?r=this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1>=this.x2&&this.x1>=this.x3?r=this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1<=this.y2&&this.y1<=this.y3?r=this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1>=this.y2&&this.y1>=this.y3?r=this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}}}),tr=Gx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bx=function(t){var r=t.x1,e=t.y1,a=t.x2,n=t.y2,i=t.x3,s=t.y3;return Math.abs(((i-r)*(n-e)-(a-r)*(s-e))/2)},Fx=Bx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nx=tr,kx=function(t,r,e){var a=e*(Math.sqrt(3)/2),n=t,i=r,s=t+e/2,h=r+a,v=t-e/2,o=r+a;return new Nx(n,i,s,h,v,o)},Dx=kx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vx=ri,Yx=tr,Ux=function(t,r,e,a,n){r===void 0&&(r=null),e===void 0&&(e=1),a===void 0&&(a=1),n===void 0&&(n=[]);for(var i=Vx(t,r),s,h,v,o,f,y,u,c,x,l=0;l<i.length;l+=3)s=i[l],h=i[l+1],v=i[l+2],o=t[s*2]*e,f=t[s*2+1]*a,y=t[h*2]*e,u=t[h*2+1]*a,c=t[v*2]*e,x=t[v*2+1]*a,n.push(new Yx(o,f,y,u,c,x));return n},Xx=Ux;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zx=tr,qx=function(t,r,e,a){a===void 0&&(a=e);var n=t,i=r,s=t,h=r-a,v=t+e,o=r;return new Zx(n,i,s,h,v,o)},Hx=qx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wx=O,Qx=function(t,r){return r===void 0&&(r=new Wx),r.x=(t.x1+t.x2+t.x3)/3,r.y=(t.y1+t.y2+t.y3)/3,r},xi=Qx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jx=function(t,r,e){return t.x1+=r,t.y1+=e,t.x2+=r,t.y2+=e,t.x3+=r,t.y3+=e,t},li=jx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kx=xi,Jx=li,tl=function(t,r,e,a){a===void 0&&(a=Kx);var n=a(t),i=r-n.x,s=e-n.y;return Jx(t,i,s)},rl=tl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var el=gt;function Ge(t,r,e,a){return t*a-r*e}var al=function(t,r){r===void 0&&(r=new el);var e=t.x3,a=t.y3,n=t.x1-e,i=t.y1-a,s=t.x2-e,h=t.y2-a,v=2*Ge(n,i,s,h),o=Ge(i,n*n+i*i,h,s*s+h*h),f=Ge(n,n*n+i*i,s,s*s+h*h);return r.x=e-o/v,r.y=a+f/v,r},nl=al;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var il=ae,sl=function(t,r){r===void 0&&(r=new il);var e=t.x1,a=t.y1,n=t.x2,i=t.y2,s=t.x3,h=t.y3,v=n-e,o=i-a,f=s-e,y=h-a,u=v*(e+n)+o*(a+i),c=f*(e+s)+y*(a+h),x=2*(v*(h-i)-o*(s-n)),l,d;if(Math.abs(x)<1e-6){var M=Math.min(e,n,s),w=Math.min(a,i,h);l=(Math.max(e,n,s)-M)*.5,d=(Math.max(a,i,h)-w)*.5,r.x=M+l,r.y=w+d,r.radius=Math.sqrt(l*l+d*d)}else r.x=(y*u-o*c)/x,r.y=(v*c-f*u)/x,l=r.x-e,d=r.y-a,r.radius=Math.sqrt(l*l+d*d);return r},hl=sl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vl=tr,ol=function(t){return new vl(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},fl=ol;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ul=gr,yl=function(t,r){return ul(t,r.x,r.y)},cl=yl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xl=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},ll=xl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dl=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2&&t.x3===r.x3&&t.y3===r.y3},ml=dl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ml=O;function Be(t,r,e,a){var n=t-e,i=r-a,s=n*n+i*i;return Math.sqrt(s)}var wl=function(t,r){r===void 0&&(r=new Ml);var e=t.x1,a=t.y1,n=t.x2,i=t.y2,s=t.x3,h=t.y3,v=Be(s,h,n,i),o=Be(e,a,s,h),f=Be(n,i,e,a),y=v+o+f;return r.x=(e*v+n*o+s*f)/y,r.y=(a*v+i*o+h*f)/y,r},di=wl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fe=ft,_l=function(t){var r=t.getLineA(),e=t.getLineB(),a=t.getLineC();return Fe(r)+Fe(e)+Fe(a)},gl=_l;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bl=function(t,r,e,a){var n=Math.cos(a),i=Math.sin(a),s=t.x1-r,h=t.y1-e;return t.x1=s*n-h*i+r,t.y1=s*i+h*n+e,s=t.x2-r,h=t.y2-e,t.x2=s*n-h*i+r,t.y2=s*i+h*n+e,s=t.x3-r,h=t.y3-e,t.x3=s*n-h*i+r,t.y3=s*i+h*n+e,t},Ne=bl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $l=Ne,Cl=di,Pl=function(t,r){var e=Cl(t);return $l(t,e.x,e.y,r)},Tl=Pl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zl=Ne,pl=function(t,r,e){return zl(t,r.x,r.y,e)},Ol=pl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N=tr;N.Area=Fx,N.BuildEquilateral=Dx,N.BuildFromPolygon=Xx,N.BuildRight=Hx,N.CenterOn=rl,N.Centroid=xi,N.CircumCenter=nl,N.CircumCircle=hl,N.Clone=fl,N.Contains=gr,N.ContainsArray=ce,N.ContainsPoint=cl,N.CopyFrom=ll,N.Decompose=cn,N.Equals=ml,N.GetPoint=ui,N.GetPoints=yi,N.InCenter=di,N.Perimeter=gl,N.Offset=li,N.Random=ci,N.Rotate=Tl,N.RotateAroundPoint=Ol,N.RotateAroundXY=Ne;var Il=N;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var El=ot,Sl=Sa,ke={Circle:Bh,Ellipse:pv,Intersects:Ho,Line:z1,Mesh:xy,Point:Ky,Polygon:Q0,Rectangle:$x,Triangle:Il};ke=Sl(!1,ke,El);var Al=ke,Rl=Oa(Al);/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ll=function(t,r,e,a){return Math.atan2(a-r,e-t)},Gl=Ll;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bl=function(t,r){return Math.atan2(r.y-t.y,r.x-t.x)},Fl=Bl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nl=function(t,r){return Math.atan2(r.x-t.x,r.y-t.y)},kl=Nl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dl=function(t,r,e,a){return Math.atan2(e-t,a-r)},Vl=Dl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rr=W,Yl=function(t){return t>Math.PI&&(t-=rr.PI2),Math.abs(((t+rr.TAU)%rr.PI2-rr.PI2)%rr.PI2)},Ul=Yl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xl=function(t){return t=t%(2*Math.PI),t>=0?t:t+2*Math.PI},mi=Xl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zl=function(t,r){return Math.random()*(r-t)+t},De=Zl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ql=De,Hl=function(){return ql(-Math.PI,Math.PI)},Wl=Hl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ql=De,jl=function(){return Ql(-180,180)},Kl=jl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jl=mi,td=function(t){return Jl(t+Math.PI)},rd=td;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ve=W,ed=function(t,r,e){return e===void 0&&(e=.05),t===r||(Math.abs(r-t)<=e||Math.abs(r-t)>=Ve.PI2-e?t=r:(Math.abs(r-t)>Math.PI&&(r<t?r+=Ve.PI2:r-=Ve.PI2),r>t?t+=e:r<t&&(t-=e))),t},ad=ed;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nd=function(t,r){var e=r-t;if(e===0)return 0;var a=Math.floor((e- -180)/360);return e-a*360},id=nd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sd=pr,hd=function(t){return sd(t,-Math.PI,Math.PI)},vd=hd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var od=pr,fd=function(t){return od(t,-180,180)},ud=fd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yd={Between:Gl,BetweenPoints:Fl,BetweenPointsY:kl,BetweenY:Vl,CounterClockwise:Ul,Normalize:mi,Random:Wl,RandomDegrees:Kl,Reverse:rd,RotateTo:ad,ShortestBetween:id,Wrap:vd,WrapDegrees:ud};/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cd=function(t,r){var e=t.x-r.x,a=t.y-r.y;return e*e+a*a},xd=cd;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ld=function(t,r,e,a){return Math.max(Math.abs(t-e),Math.abs(r-a))},dd=ld;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var md=function(t,r,e,a,n){return n===void 0&&(n=2),Math.sqrt(Math.pow(e-t,n)+Math.pow(a-r,n))},Md=md;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wd=function(t,r,e,a){return Math.abs(t-e)+Math.abs(r-a)},_d=wd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gd=function(t,r,e,a){var n=t-e,i=r-a;return n*n+i*i},bd=gd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $d={Between:ja,BetweenPoints:Mn,BetweenPointsSquared:xd,Chebyshev:dd,Power:Md,Snake:_d,Squared:bd};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cd={Back:wn,Bounce:_n,Circular:gn,Cubic:bn,Elastic:$n,Expo:Cn,Linear:Pn,Quadratic:Tn,Quartic:zn,Quintic:pn,Sine:On,Stepped:In};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pd=function(t,r){return r===void 0&&(r=1e-4),Math.ceil(t-r)},Td=Pd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zd=function(t,r){return r===void 0&&(r=1e-4),Math.floor(t+r)},pd=zd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Od=function(t,r,e){return e===void 0&&(e=1e-4),t>r-e},Id=Od;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ed=function(t,r,e){return e===void 0&&(e=1e-4),t<r+e},Sd=Ed;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ad={Ceil:Td,Equal:Va,Floor:pd,GreaterThan:Id,LessThan:Sd};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rd=function(t){if(t===0)return 1;for(var r=t;--t;)r*=t;return r},Mi=Rd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ye=Mi,Ld=function(t,r){return Ye(t)/Ye(r)/Ye(t-r)},wi=Ld;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gd=wi,Bd=function(t,r){for(var e=0,a=t.length-1,n=0;n<=a;n++)e+=Math.pow(1-r,a-n)*Math.pow(r,n)*t[n]*Gd(a,n);return e},Fd=Bd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nd=function(t,r,e,a,n){var i=(a-r)*.5,s=(n-e)*.5,h=t*t,v=t*h;return(2*e-2*a+i+s)*v+(-3*e+3*a-2*i-s)*h+i*t+e},_i=Nd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fr=_i,kd=function(t,r){var e=t.length-1,a=e*r,n=Math.floor(a);return t[0]===t[e]?(r<0&&(n=Math.floor(a=e*(1+r))),Fr(a-n,t[(n-1+e)%e],t[n],t[(n+1)%e],t[(n+2)%e])):r<0?t[0]-(Fr(-a,t[0],t[0],t[1],t[1])-t[0]):r>1?t[e]-(Fr(a-e,t[e],t[e],t[e-1],t[e-1])-t[e]):Fr(a-n,t[n?n-1:0],t[n],t[e<n+1?e:n+1],t[e<n+2?e:n+2])},Dd=kd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Vd(t,r){var e=1-t;return e*e*e*r}function Yd(t,r){var e=1-t;return 3*e*e*t*r}function Ud(t,r){return 3*(1-t)*t*t*r}function Xd(t,r){return t*t*t*r}var Zd=function(t,r,e,a,n){return Vd(t,r)+Yd(t,e)+Ud(t,a)+Xd(t,n)},qd=Zd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hd=function(t,r,e){return(r-t)*e+t},gi=Hd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ue=gi,Wd=function(t,r){var e=t.length-1,a=e*r,n=Math.floor(a);return r<0?Ue(t[0],t[1],a):r>1?Ue(t[e],t[e-1],e-a):Ue(t[n],t[n+1>e?e:n+1],a-n)},Qd=Wd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function jd(t,r){var e=1-t;return e*e*r}function Kd(t,r){return 2*(1-t)*t*r}function Jd(t,r){return t*t*r}var t2=function(t,r,e,a){return jd(t,r)+Kd(t,e)+Jd(t,a)},r2=t2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var e2=function(t,r,e){return t<=r?0:t>=e?1:(t=(t-r)/(e-r),t*t*(3-2*t))},bi=e2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var a2=bi,n2=function(t,r,e){return r+(e-r)*a2(t,0,1)},i2=n2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s2=function(t,r,e){return t=Math.max(0,Math.min(1,(t-r)/(e-r))),t*t*t*(t*(t*6-15)+10)},$i=s2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var h2=$i,v2=function(t,r,e){return r+(e-r)*h2(t,0,1)},o2=v2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var f2={Bezier:Fd,CatmullRom:Dd,CubicBezier:qd,Linear:Qd,QuadraticBezier:r2,SmoothStep:i2,SmootherStep:o2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var u2=function(t){var r=Math.log(t)/.6931471805599453;return 1<<Math.ceil(r)},y2=u2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var c2=function(t,r){return t>0&&(t&t-1)===0&&r>0&&(r&r-1)===0},x2=c2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l2=function(t){return t>0&&(t&t-1)===0},d2=l2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var m2={GetNext:y2,IsSize:x2,IsValue:d2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var M2=function(t,r,e,a){return e===void 0&&(e=0),r===0?t:(t-=e,t=r*Math.ceil(t/r),a?(e+t)/r:e+t)},w2=M2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _2=function(t,r,e,a){return e===void 0&&(e=0),r===0?t:(t-=e,t=r*Math.floor(t/r),a?(e+t)/r:e+t)},g2=_2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var b2=function(t,r,e,a){return e===void 0&&(e=0),r===0?t:(t-=e,t=r*Math.round(t/r),a?(e+t)/r:e+t)},$2=b2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var C2={Ceil:w2,Floor:g2,To:$2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var P2=Y,T2=new P2({initialize:function(r){r===void 0&&(r=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],r&&this.init(r)},rnd:function(){var t=2091639*this.s0+this.c*23283064365386963e-26;return this.c=t|0,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var r,e=this.n;t=t.toString();for(var a=0;a<t.length;a++)e+=t.charCodeAt(a),r=.02519603282416938*e,e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296;return this.n=e,(e>>>0)*23283064365386963e-26},init:function(t){typeof t=="string"?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,!!t)for(var r=0;r<t.length&&t[r]!=null;r++){var e=t[r];this.s0-=this.hash(e),this.s0+=~~(this.s0<0),this.s1-=this.hash(e),this.s1+=~~(this.s1<0),this.s2-=this.hash(e),this.s2+=~~(this.s2<0)}},integer:function(){return this.rnd()*4294967296},frac:function(){return this.rnd()+(this.rnd()*2097152|0)*11102230246251565e-32},real:function(){return this.integer()+this.frac()},integerInRange:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},between:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},realInRange:function(t,r){return this.frac()*(r-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",r="";for(r=t="";t++<36;r+=~t%5|t*3&4?(t^15?8^this.frac()*(t^20?16:4):4).toString(16):"-");return r},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-.5)+.5)]},timestamp:function(t,r){return this.realInRange(t||9466848e5,r||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return typeof t=="string"&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var r=t.length-1,e=r;e>0;e--){var a=Math.floor(this.frac()*(e+1)),n=t[a];t[a]=t[e],t[e]=n}return t}}),z2=T2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var p2=function(t){for(var r=0,e=0;e<t.length;e++)r+=+t[e];return r/t.length},O2=p2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var I2=function(t,r,e){r===void 0&&(r=0),e===void 0&&(e=10);var a=Math.pow(e,-r);return Math.ceil(t*a)/a},E2=I2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S2=function(t,r){return Math.abs(t-r)},A2=S2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R2=function(){},Ci=R2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var It=ee,L2=Y,G2=Ht,B2=Ci,Pi=new G2,Xe=new L2({initialize:function t(r,e,a,n){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=t.DefaultOrder),this._x=r,this._y=e,this._z=a,this._order=n,this.onChangeCallback=B2},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback(this)}},set:function(t,r,e,a){return a===void 0&&(a=this._order),this._x=t,this._y=r,this._z=e,this._order=a,this.onChangeCallback(this),this},copy:function(t){return this.set(t.x,t.y,t.z,t.order)},setFromQuaternion:function(t,r,e){return r===void 0&&(r=this._order),e===void 0&&(e=!1),Pi.fromQuat(t),this.setFromRotationMatrix(Pi,r,e)},setFromRotationMatrix:function(t,r,e){r===void 0&&(r=this._order),e===void 0&&(e=!1);var a=t.val,n=a[0],i=a[4],s=a[8],h=a[1],v=a[5],o=a[9],f=a[2],y=a[6],u=a[10],c=0,x=0,l=0,d=.99999;switch(r){case"XYZ":{x=Math.asin(It(s,-1,1)),Math.abs(s)<d?(c=Math.atan2(-o,u),l=Math.atan2(-i,n)):c=Math.atan2(y,v);break}case"YXZ":{c=Math.asin(-It(o,-1,1)),Math.abs(o)<d?(x=Math.atan2(s,u),l=Math.atan2(h,v)):x=Math.atan2(-f,n);break}case"ZXY":{c=Math.asin(It(y,-1,1)),Math.abs(y)<d?(x=Math.atan2(-f,u),l=Math.atan2(-i,v)):l=Math.atan2(h,n);break}case"ZYX":{x=Math.asin(-It(f,-1,1)),Math.abs(f)<d?(c=Math.atan2(y,u),l=Math.atan2(h,n)):l=Math.atan2(-i,v);break}case"YZX":{l=Math.asin(It(h,-1,1)),Math.abs(h)<d?(c=Math.atan2(-o,v),x=Math.atan2(-f,n)):x=Math.atan2(s,u);break}case"XZY":{l=Math.asin(-It(i,-1,1)),Math.abs(i)<d?(c=Math.atan2(y,v),x=Math.atan2(s,n)):c=Math.atan2(-o,u);break}}return this._x=c,this._y=x,this._z=l,this._order=r,e&&this.onChangeCallback(this),this}});Xe.RotationOrders=["XYZ","YXZ","ZXY","ZYX","YZX","XZY"],Xe.DefaultOrder="XYZ";var F2=Xe;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N2=function(t,r,e){r===void 0&&(r=0),e===void 0&&(e=10);var a=Math.pow(e,-r);return Math.floor(t*a)/a},k2=N2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var D2=function(t,r){return t/r/1e3},V2=D2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Y2=function(t){return t==parseFloat(t)?!(t%2):void 0},U2=Y2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var X2=function(t){return t===parseFloat(t)?!(t%2):void 0},Z2=X2;/**
 * @author       Greg McLean <GregDevProjects>
 * @copyright    2021 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q2=function(t,r,e){return e===void 0&&(e=0),t.clone().lerp(r,e)},H2=q2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var W2=function(t,r,e){return Math.min(t+r,e)},Q2=W2;/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var j2=function(t){var r=t.length;if(r===0)return 0;t.sort(function(a,n){return a-n});var e=Math.floor(r/2);return r%2===0?(t[e]+t[e-1])/2:t[e]},K2=j2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var J2=function(t,r,e){return Math.max(t-r,e)},tm=J2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rm=function(t,r,e,a){e===void 0&&(e=r+1);var n=(t-r)/(e-r);return n>1?a!==void 0?(n=(a-t)/(a-e),n<0&&(n=0)):n=1:n<0&&(n=0),n},em=rm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var am=W,nm=function(t){return t*am.RAD_TO_DEG},im=nm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sm=function(t,r){r===void 0&&(r=1);var e=Math.random()*2*Math.PI;return t.x=Math.cos(e)*r,t.y=Math.sin(e)*r,t},hm=sm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vm=function(t,r){r===void 0&&(r=1);var e=Math.random()*2*Math.PI,a=Math.random()*2-1,n=Math.sqrt(1-a*a)*r;return t.x=Math.cos(e)*n,t.y=Math.sin(e)*n,t.z=a*r,t},om=vm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fm=function(t,r){return r===void 0&&(r=1),t.x=(Math.random()*2-1)*r,t.y=(Math.random()*2-1)*r,t.z=(Math.random()*2-1)*r,t.w=(Math.random()*2-1)*r,t},um=fm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ym=function(t,r){var e=t.x,a=t.y;return t.x=e*Math.cos(r)-a*Math.sin(r),t.y=e*Math.sin(r)+a*Math.cos(r),t},cm=ym;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xm=function(t,r,e,a){var n=Math.cos(a),i=Math.sin(a),s=t.x-r,h=t.y-e;return t.x=s*n-h*i+r,t.y=s*i+h*n+e,t},lm=xm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dm=function(t,r,e,a,n){var i=a+Math.atan2(t.y-e,t.x-r);return t.x=r+n*Math.cos(i),t.y=e+n*Math.sin(i),t},mm=dm;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mm=function(t,r,e,a,n){return t.x=r+n*Math.cos(a),t.y=e+n*Math.sin(a),t},wm=Mm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _m=function(t){return t>0?Math.ceil(t):Math.floor(t)},gm=_m;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bm=function(t,r,e){r===void 0&&(r=0),e===void 0&&(e=10);var a=Math.pow(e,-r);return Math.round(t*a)/a},$m=bm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cm=function(t,r,e,a){r===void 0&&(r=1),e===void 0&&(e=1),a===void 0&&(a=1),a*=Math.PI/t;for(var n=[],i=[],s=0;s<t;s++)e-=r*a,r+=e*a,n[s]=e,i[s]=r;return{sin:i,cos:n,length:t}},Pm=Cm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tm=gt,zm=function(t,r,e,a){a===void 0&&(a=new Tm);var n=0,i=0,s=r*e;return t>0&&t<=s&&(t>r-1?(i=Math.floor(t/r),n=t-i*r):n=t),a.set(n,i)},pm=zm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Om=gt,Im=function(t,r,e,a,n,i,s,h){h===void 0&&(h=new Om);var v=Math.sin(n),o=Math.cos(n),f=o*i,y=v*i,u=-v*s,c=o*s,x=1/(f*c+u*-y);return h.x=c*x*t+-u*x*r+(a*u-e*c)*x,h.y=f*x*r+-y*x*t+(-a*f+e*y)*x,h},Em=Im;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sm=function(t,r,e){return Math.abs(t-r)<=e},Am=Sm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rm=Y,Ti=new Rm({initialize:function(r){this.val=new Float32Array(9),r?this.copy(r):this.identity()},clone:function(){return new Ti(this)},set:function(t){return this.copy(t)},copy:function(t){var r=this.val,e=t.val;return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],this},fromMat4:function(t){var r=t.val,e=this.val;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[4],e[4]=r[5],e[5]=r[6],e[6]=r[8],e[7]=r[9],e[8]=r[10],this},fromArray:function(t){var r=this.val;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,r=t[1],e=t[2],a=t[5];return t[1]=t[3],t[2]=t[6],t[3]=r,t[5]=t[7],t[6]=e,t[7]=a,this},invert:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8],f=o*i-s*v,y=-o*n+s*h,u=v*n-i*h,c=r*f+e*y+a*u;return c?(c=1/c,t[0]=f*c,t[1]=(-o*e+a*v)*c,t[2]=(s*e-a*i)*c,t[3]=y*c,t[4]=(o*r-a*h)*c,t[5]=(-s*r+a*n)*c,t[6]=u*c,t[7]=(-v*r+e*h)*c,t[8]=(i*r-e*n)*c,this):null},adjoint:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8];return t[0]=i*o-s*v,t[1]=a*v-e*o,t[2]=e*s-a*i,t[3]=s*h-n*o,t[4]=r*o-a*h,t[5]=a*n-r*s,t[6]=n*v-i*h,t[7]=e*h-r*v,t[8]=r*i-e*n,this},determinant:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8];return r*(o*i-s*v)+e*(-o*n+s*h)+a*(v*n-i*h)},multiply:function(t){var r=this.val,e=r[0],a=r[1],n=r[2],i=r[3],s=r[4],h=r[5],v=r[6],o=r[7],f=r[8],y=t.val,u=y[0],c=y[1],x=y[2],l=y[3],d=y[4],M=y[5],w=y[6],m=y[7],_=y[8];return r[0]=u*e+c*i+x*v,r[1]=u*a+c*s+x*o,r[2]=u*n+c*h+x*f,r[3]=l*e+d*i+M*v,r[4]=l*a+d*s+M*o,r[5]=l*n+d*h+M*f,r[6]=w*e+m*i+_*v,r[7]=w*a+m*s+_*o,r[8]=w*n+m*h+_*f,this},translate:function(t){var r=this.val,e=t.x,a=t.y;return r[6]=e*r[0]+a*r[3]+r[6],r[7]=e*r[1]+a*r[4]+r[7],r[8]=e*r[2]+a*r[5]+r[8],this},rotate:function(t){var r=this.val,e=r[0],a=r[1],n=r[2],i=r[3],s=r[4],h=r[5],v=Math.sin(t),o=Math.cos(t);return r[0]=o*e+v*i,r[1]=o*a+v*s,r[2]=o*n+v*h,r[3]=o*i-v*e,r[4]=o*s-v*a,r[5]=o*h-v*n,this},scale:function(t){var r=this.val,e=t.x,a=t.y;return r[0]=e*r[0],r[1]=e*r[1],r[2]=e*r[2],r[3]=a*r[3],r[4]=a*r[4],r[5]=a*r[5],this},fromQuat:function(t){var r=t.x,e=t.y,a=t.z,n=t.w,i=r+r,s=e+e,h=a+a,v=r*i,o=r*s,f=r*h,y=e*s,u=e*h,c=a*h,x=n*i,l=n*s,d=n*h,M=this.val;return M[0]=1-(y+c),M[3]=o+d,M[6]=f-l,M[1]=o-d,M[4]=1-(v+c),M[7]=u+x,M[2]=f+l,M[5]=u-x,M[8]=1-(v+y),this},normalFromMat4:function(t){var r=t.val,e=this.val,a=r[0],n=r[1],i=r[2],s=r[3],h=r[4],v=r[5],o=r[6],f=r[7],y=r[8],u=r[9],c=r[10],x=r[11],l=r[12],d=r[13],M=r[14],w=r[15],m=a*v-n*h,_=a*o-i*h,g=a*f-s*h,b=n*o-i*v,I=n*f-s*v,S=i*f-s*o,T=y*d-u*l,z=y*M-c*l,P=y*w-x*l,E=u*M-c*d,$=u*w-x*d,L=c*w-x*M,C=m*L-_*$+g*E+b*P-I*z+S*T;return C?(C=1/C,e[0]=(v*L-o*$+f*E)*C,e[1]=(o*P-h*L-f*z)*C,e[2]=(h*$-v*P+f*T)*C,e[3]=(i*$-n*L-s*E)*C,e[4]=(a*L-i*P+s*z)*C,e[5]=(n*P-a*$-s*T)*C,e[6]=(d*S-M*I+w*b)*C,e[7]=(M*g-l*S-w*_)*C,e[8]=(l*I-d*g+w*m)*C,this):null}}),zi=Ti;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lm=Y,Gm=zi,Bm=Ci,Ze=at,pi=1e-6,Oi=new Int8Array([1,2,0]),Et=new Float32Array([0,0,0]),Fm=new Ze(1,0,0),Nm=new Ze(0,1,0),ct=new Ze,Ii=new Gm,km=new Lm({initialize:function(r,e,a,n){this.onChangeCallback=Bm,this.set(r,e,a,n)},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback(this)}},copy:function(t){return this.set(t)},set:function(t,r,e,a,n){return n===void 0&&(n=!0),typeof t=="object"?(this._x=t.x||0,this._y=t.y||0,this._z=t.z||0,this._w=t.w||0):(this._x=t||0,this._y=r||0,this._z=e||0,this._w=a||0),n&&this.onChangeCallback(this),this},add:function(t){return this._x+=t.x,this._y+=t.y,this._z+=t.z,this._w+=t.w,this.onChangeCallback(this),this},subtract:function(t){return this._x-=t.x,this._y-=t.y,this._z-=t.z,this._w-=t.w,this.onChangeCallback(this),this},scale:function(t){return this._x*=t,this._y*=t,this._z*=t,this._w*=t,this.onChangeCallback(this),this},length:function(){var t=this.x,r=this.y,e=this.z,a=this.w;return Math.sqrt(t*t+r*r+e*e+a*a)},lengthSq:function(){var t=this.x,r=this.y,e=this.z,a=this.w;return t*t+r*r+e*e+a*a},normalize:function(){var t=this.x,r=this.y,e=this.z,a=this.w,n=t*t+r*r+e*e+a*a;return n>0&&(n=1/Math.sqrt(n),this._x=t*n,this._y=r*n,this._z=e*n,this._w=a*n),this.onChangeCallback(this),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var e=this.x,a=this.y,n=this.z,i=this.w;return this.set(e+r*(t.x-e),a+r*(t.y-a),n+r*(t.z-n),i+r*(t.w-i))},rotationTo:function(t,r){var e=t.x*r.x+t.y*r.y+t.z*r.z;return e<-.999999?(ct.copy(Fm).cross(t).length()<pi&&ct.copy(Nm).cross(t),ct.normalize(),this.setAxisAngle(ct,Math.PI)):e>.999999?this.set(0,0,0,1):(ct.copy(t).cross(r),this._x=ct.x,this._y=ct.y,this._z=ct.z,this._w=1+e,this.normalize())},setAxes:function(t,r,e){var a=Ii.val;return a[0]=r.x,a[3]=r.y,a[6]=r.z,a[1]=e.x,a[4]=e.y,a[7]=e.z,a[2]=-t.x,a[5]=-t.y,a[8]=-t.z,this.fromMat3(Ii).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(t,r){r=r*.5;var e=Math.sin(r);return this.set(e*t.x,e*t.y,e*t.z,Math.cos(r))},multiply:function(t){var r=this.x,e=this.y,a=this.z,n=this.w,i=t.x,s=t.y,h=t.z,v=t.w;return this.set(r*v+n*i+e*h-a*s,e*v+n*s+a*i-r*h,a*v+n*h+r*s-e*i,n*v-r*i-e*s-a*h)},slerp:function(t,r){var e=this.x,a=this.y,n=this.z,i=this.w,s=t.x,h=t.y,v=t.z,o=t.w,f=e*s+a*h+n*v+i*o;f<0&&(f=-f,s=-s,h=-h,v=-v,o=-o);var y=1-r,u=r;if(1-f>pi){var c=Math.acos(f),x=Math.sin(c);y=Math.sin((1-r)*c)/x,u=Math.sin(r*c)/x}return this.set(y*e+u*s,y*a+u*h,y*n+u*v,y*i+u*o)},invert:function(){var t=this.x,r=this.y,e=this.z,a=this.w,n=t*t+r*r+e*e+a*a,i=n?1/n:0;return this.set(-t*i,-r*i,-e*i,a*i)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(t){t*=.5;var r=this.x,e=this.y,a=this.z,n=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s+n*i,e*s+a*i,a*s-e*i,n*s-r*i)},rotateY:function(t){t*=.5;var r=this.x,e=this.y,a=this.z,n=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s-a*i,e*s+n*i,a*s+r*i,n*s-e*i)},rotateZ:function(t){t*=.5;var r=this.x,e=this.y,a=this.z,n=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s+e*i,e*s-r*i,a*s+n*i,n*s-a*i)},calculateW:function(){var t=this.x,r=this.y,e=this.z;return this.w=-Math.sqrt(1-t*t-r*r-e*e),this},setFromEuler:function(t,r){var e=t.x/2,a=t.y/2,n=t.z/2,i=Math.cos(e),s=Math.cos(a),h=Math.cos(n),v=Math.sin(e),o=Math.sin(a),f=Math.sin(n);switch(t.order){case"XYZ":{this.set(v*s*h+i*o*f,i*o*h-v*s*f,i*s*f+v*o*h,i*s*h-v*o*f,r);break}case"YXZ":{this.set(v*s*h+i*o*f,i*o*h-v*s*f,i*s*f-v*o*h,i*s*h+v*o*f,r);break}case"ZXY":{this.set(v*s*h-i*o*f,i*o*h+v*s*f,i*s*f+v*o*h,i*s*h-v*o*f,r);break}case"ZYX":{this.set(v*s*h-i*o*f,i*o*h+v*s*f,i*s*f-v*o*h,i*s*h+v*o*f,r);break}case"YZX":{this.set(v*s*h+i*o*f,i*o*h+v*s*f,i*s*f-v*o*h,i*s*h-v*o*f,r);break}case"XZY":{this.set(v*s*h-i*o*f,i*o*h-v*s*f,i*s*f+v*o*h,i*s*h+v*o*f,r);break}}return this},setFromRotationMatrix:function(t){var r=t.val,e=r[0],a=r[4],n=r[8],i=r[1],s=r[5],h=r[9],v=r[2],o=r[6],f=r[10],y=e+s+f,u;return y>0?(u=.5/Math.sqrt(y+1),this.set((o-h)*u,(n-v)*u,(i-a)*u,.25/u)):e>s&&e>f?(u=2*Math.sqrt(1+e-s-f),this.set(.25*u,(a+i)/u,(n+v)/u,(o-h)/u)):s>f?(u=2*Math.sqrt(1+s-e-f),this.set((a+i)/u,.25*u,(h+o)/u,(n-v)/u)):(u=2*Math.sqrt(1+f-e-s),this.set((n+v)/u,(h+o)/u,.25*u,(i-a)/u)),this},fromMat3:function(t){var r=t.val,e=r[0]+r[4]+r[8],a;if(e>0)a=Math.sqrt(e+1),this.w=.5*a,a=.5/a,this._x=(r[7]-r[5])*a,this._y=(r[2]-r[6])*a,this._z=(r[3]-r[1])*a;else{var n=0;r[4]>r[0]&&(n=1),r[8]>r[n*3+n]&&(n=2);var i=Oi[n],s=Oi[i];a=Math.sqrt(r[n*3+n]-r[i*3+i]-r[s*3+s]+1),Et[n]=.5*a,a=.5/a,Et[i]=(r[i*3+n]+r[n*3+i])*a,Et[s]=(r[s*3+n]+r[n*3+s])*a,this._x=Et[0],this._y=Et[1],this._z=Et[2],this._w=(r[s*3+i]-r[i*3+s])*a}return this.onChangeCallback(this),this}}),Ei=km;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dm=at,Vm=Ht,Ym=Ei,Si=new Vm,Ai=new Ym,Um=new Dm,Xm=function(t,r,e){return Ai.setAxisAngle(r,e),Si.fromRotationTranslation(Ai,Um.set(0,0,0)),t.transformMat4(Si)},Zm=Xm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qm=W,Hm=Sa,qe={Angle:yd,Distance:$d,Easing:Cd,Fuzzy:Ad,Interpolation:f2,Pow2:m2,Snap:C2,RandomDataGenerator:z2,Average:O2,Bernstein:wi,Between:fi,CatmullRom:_i,CeilTo:E2,Clamp:ee,DegToRad:oi,Difference:A2,Euler:F2,Factorial:Mi,FloatBetween:De,FloorTo:k2,FromPercent:Dt,GetSpeed:V2,IsEven:U2,IsEvenStrict:Z2,Linear:gi,LinearXY:H2,MaxAdd:Q2,Median:K2,MinSub:tm,Percent:em,RadToDeg:im,RandomXY:hm,RandomXYZ:om,RandomXYZW:um,Rotate:cm,RotateAround:lm,RotateAroundDistance:mm,RotateTo:wm,RoundAwayFromZero:gm,RoundTo:$m,SinCosTableGenerator:Pm,SmootherStep:$i,SmoothStep:bi,ToXY:pm,TransformXY:Em,Within:Am,Wrap:pr,Vector2:gt,Vector3:at,Vector4:fe,Matrix3:zi,Matrix4:Ht,Quaternion:Ei,RotateVec3:Zm};qe=Hm(!1,qe,qm);var Wm=qe,He=Oa(Wm);function Qm(t,r){let e=new Rl.Point(0,0),a=He.Angle.BetweenPoints(e,new He.Vector2(t,r));return He.RadToDeg(a)}function jm(t){return t*(Math.PI/180)}class Km{constructor(r){F(this,"world");this.world=r}run(){this.world.entities.forEach(r=>{if(!r.targetPointer)return;let e=this.world.getEntityByPointer(r.targetPointer);if(!e)return;let a=Jm(r,e),n=ht(r.velocityX+a.x*4,r.velocityY+a.y*4);r.velocityX=n.x*r.speed,r.velocityY=n.y*r.speed,r.angle=jm(Qm(r.velocityX,r.velocityY))},r=>r instanceof $a)}}function Jm(t,r){return ht(r.x-t.x,r.y-t.y)}ts(t=>new Km(t))})();

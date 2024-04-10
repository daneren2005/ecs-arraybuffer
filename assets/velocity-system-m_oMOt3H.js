var eM=Object.defineProperty;var aM=(st,et,nt)=>et in st?eM(st,et,{enumerable:!0,configurable:!0,writable:!0,value:nt}):st[et]=nt;var F=(st,et,nt)=>(aM(st,typeof et!="symbol"?et+"":et,nt),nt);(function(){"use strict";function st(t){return t*(Math.PI/180)}const et=20,nt=32-et,Xr=Math.pow(2,et),aa=Math.pow(2,nt);function ar(t,r=0){return Zr(Atomics.load(t,r))}function Ai(t,r=0){return Atomics.load(t,r)}function na(t,r=0,e,a){Atomics.store(t,r,sa(e,a))}function ia(t,r=0,e){Atomics.store(t,r,e)}function Ri(t,r,e,a){return Atomics.compareExchange(t,r,a,e)===a}function Zr(t){return{bufferPosition:t&4095,bufferByteOffset:t>>>nt}}function sa(t,r){return t+(r<<nt)}class rt{get bufferByteOffset(){return this.data.byteOffset}get pointer(){return sa(this.bufferPosition,this.bufferByteOffset)}constructor(r,e){this.memory=r,"buffer"in e?(this.data=e.data,this.buffer=e.buffer,this.bufferPosition=this.memory.buffers.indexOf(e.buffer)):(this.bufferPosition=e.bufferPosition,this.buffer=r.buffers[e.bufferPosition],this.data=new Uint32Array(this.buffer.buf,e.bufferByteOffset))}getArray(r,e,a){return new r(this.data.buffer,this.data.byteOffset+e*r.BYTES_PER_ELEMENT,a)}getArrayMemory(r,e){return{bufferPosition:this.bufferPosition,bufferByteOffset:this.bufferByteOffset+r*this.data.BYTES_PER_ELEMENT}}free(){this.buffer.free(this.data.byteOffset)}getSharedMemory(){return{bufferPosition:this.bufferPosition,bufferByteOffset:this.bufferByteOffset}}}const qr=0,nr=1;function ha(t,r=0){for(;Atomics.compareExchange(t,r,qr,nr)!==qr;)"WorkerGlobalScope"in self&&Atomics.wait(t,r,nr)}function Lt(t,r=0){Atomics.compareExchange(t,r,nr,qr)!==nr&&console.warn("We are unlocking when it was not locked!"),Atomics.notify(t,r)}const Li={5120:"i8",5121:"u8",5122:"i16",5123:"u16",5124:"i32",5125:"u32",5126:"f32"},Gi={f32:Float32Array,f64:Float64Array},Bi={i8:Int8Array,i16:Int16Array,i32:Int32Array},Fi={u8:Uint8Array,u8c:Uint8ClampedArray,u16:Uint16Array,u32:Uint32Array},Ni={i64:BigInt64Array,u64:BigUint64Array},ki={...Gi,...Bi,...Fi},Di=t=>{const r=Li[t];return r!==void 0?r:t};function Vi(t,...r){const e=Ni[t];return new(e||ki[Di(t)])(...r)}const va=0,oa=1,fa=2,ua=3,ya=4,wt=5,ca=6,Hr=1,Wr=2,xa=8*4,Qr=0,jr=1,ht=2*4;class Kr{constructor(r={}){if(this.buf=r.buf?r.buf:new ArrayBuffer(r.size||4096),this.start=r.start!=null?sr(Math.max(r.start,0),4):0,this.u8=new Uint8Array(this.buf),this.u32=new Uint32Array(this.buf),this.state=new Uint32Array(this.buf,this.start,xa/4),this.lock=new Int32Array(this.buf,this.start+this.state.byteLength-4,1),!r.skipInitialization){const e=r.align||8;if(e<8)throw new Error(`invalid alignment: ${e}, must be a pow2 and >= 8`);const a=this.initialTop(e),n=r.end!=null?Math.min(r.end,this.buf.byteLength):this.buf.byteLength;if(a>=n)throw new Error(`insufficient address range (0x${this.start.toString(16)} - 0x${n.toString(16)})`);this.align=e,this.doCompact=r.compact!==!1,this.doSplit=r.split!==!1,this.minSplit=r.minSplit||16,this.end=n,this.top=a,this._free=0,this._used=0}}stats(){const r=a=>{let n=0,i=0;for(;a;)if(n++,i+=this.blockSize(a),a=this.blockNext(a),a>this.end){console.error(`Trying to get stats for block past end of buffer: ${a} > ${this.end}`);break}return{count:n,size:i}},e=r(this._free);return{free:e,used:r(this._used),top:this.top,available:this.end-this.top+e.size,total:this.buf.byteLength}}callocAs(r,e,a=0){const n=this.mallocAs(r,e);return n&&n.fill(a),n}mallocAs(r,e){const a=this.malloc(e*Yi[r]);return a?Vi(r,this.buf,a,e):void 0}calloc(r,e=0){const a=this.malloc(r);return a&&this.u8.fill(e,a,a+r),a}malloc(r){if(r<=0)return 0;ha(this.lock);const e=sr(r+ht,this.align),a=this.end;let n=this.top,i=this._free,s=0;for(;i;){const h=this.blockSize(i),v=i+h>=n;if(v||h>=e){let o=this.mallocTop(i,s,h,e,v);return Lt(this.lock),o}s=i,i=this.blockNext(i)}if(i=n,n=i+e,n<=a){this.initBlock(i,e,this._used),this._used=i,this.top=n;let h=Gt(i);return Lt(this.lock),h}return Lt(this.lock),0}mallocTop(r,e,a,n,i){if(i&&r+n>this.end)return 0;if(e?this.unlinkBlock(e,r):this._free=this.blockNext(r),this.setBlockNext(r,this._used),this._used=r,i)this.top=r+this.setBlockSize(r,n);else if(this.doSplit){const s=a-n;s>=this.minSplit&&this.splitBlock(r,n,s)}return Gt(r)}realloc(r,e){if(e<=0)return 0;const a=ir(r);let n=0,i=this._used,s=0;for(;i;){if(i===a){[n,s]=this.reallocBlock(i,e);break}i=this.blockNext(i)}return n&&n!==a&&this.u8.copyWithin(Gt(n),Gt(a),s),Gt(n)}reallocBlock(r,e){const a=this.blockSize(r),n=r+a,i=n>=this.top,s=sr(e+ht,this.align);if(s<=a){if(this.doSplit){const h=a-s;h>=this.minSplit?this.splitBlock(r,s,h):i&&(this.top=r+s)}else i&&(this.top=r+s);return[r,n]}return i&&r+s<this.end?(this.top=r+this.setBlockSize(r,s),[r,n]):(this.free(r),[ir(this.malloc(e)),n])}reallocArray(r,e){if(r.buffer!==this.buf)return;const a=this.realloc(r.byteOffset,e*r.BYTES_PER_ELEMENT);return a?new r.constructor(this.buf,a,e):void 0}bytesFor(r){let e;if(typeof r!="number"){if(r.buffer!==this.buf)return;e=r.byteOffset}else e=r;e=ir(e);let a=this._used;for(;a;){if(a===e)return this.blockSize(e);a=this.blockNext(a)}}lengthOf(r){let e=this.bytesFor(r);if(e)return e/this.u32.BYTES_PER_ELEMENT}free(r){let e;if(typeof r!="number"){if(r.buffer!==this.buf)return!1;e=r.byteOffset}else e=r;ha(this.lock),e=ir(e);let a=this._used,n=0;for(;a;){if(a===e)return n?this.unlinkBlock(n,a):this._used=this.blockNext(a),this.insert(a),this.doCompact&&this.compact(),Lt(this.lock),!0;n=a,a=this.blockNext(a)}return Lt(this.lock),!1}freeAll(){this._free=0,this._used=0,this.top=this.initialTop()}release(){return delete this.u8,delete this.u32,delete this.state,delete this.buf,!0}get align(){return this.state[ya]}set align(r){this.state[ya]=r}get end(){return this.state[ua]}set end(r){this.state[ua]=r}get top(){return Atomics.load(this.state,fa)}set top(r){Atomics.store(this.state,fa,r)}get _free(){return Atomics.load(this.state,va)}set _free(r){Atomics.store(this.state,va,r)}get _used(){return Atomics.load(this.state,oa)}set _used(r){Atomics.store(this.state,oa,r)}get doCompact(){return!!(this.state[wt]&Hr)}set doCompact(r){r?this.state[wt]|=1<<Hr-1:this.state[wt]&=~Hr}get doSplit(){return!!(this.state[wt]&Wr)}set doSplit(r){r?this.state[wt]|=1<<Wr-1:this.state[wt]&=~Wr}get minSplit(){return this.state[ca]}set minSplit(r){if(r<=ht)throw new Error(`illegal min split threshold: ${r}, require at least ${ht+1}`);this.state[ca]=r}blockSize(r){return Atomics.load(this.u32,(r>>2)+Qr)}setBlockSize(r,e){return Atomics.store(this.u32,(r>>2)+Qr,e),e}blockNext(r){return Atomics.load(this.u32,(r>>2)+jr)}setBlockNext(r,e){Atomics.store(this.u32,(r>>2)+jr,e)}initBlock(r,e,a){const n=r>>>2;return Atomics.store(this.u32,n+Qr,e),Atomics.store(this.u32,n+jr,a),r}unlinkBlock(r,e){this.setBlockNext(r,this.blockNext(e))}splitBlock(r,e,a){this.insert(this.initBlock(r+this.setBlockSize(r,e),a,0)),this.doCompact&&this.compact()}initialTop(r=this.align){return sr(this.start+xa+ht,r)-ht}compact(){let r=this._free,e=0,a=0,n,i=!1;for(;r;){for(n=r,a=this.blockNext(r);a&&n+this.blockSize(n)===a;)n=a,a=this.blockNext(a);if(n!==r){const s=n-r+this.blockSize(n);this.setBlockSize(r,s);const h=this.blockNext(n);let v=this.blockNext(r);for(;v&&v!==h;){const o=this.blockNext(v);this.setBlockNext(v,0),v=o}this.setBlockNext(r,h),i=!0}r+this.blockSize(r)>=this.top&&(this.top=r,e?this.unlinkBlock(e,r):this._free=this.blockNext(r)),e=r,r=this.blockNext(r)}return i}insert(r){let e=this._free,a=0;for(;e&&!(r<=e);)a=e,e=this.blockNext(e);a?this.setBlockNext(a,r):this._free=r,this.setBlockNext(r,e)}}const Gt=t=>t>0?t+ht:0,ir=t=>t>0?t-ht:0,sr=(t,r)=>(r--,t+r&~r),Yi={u8:1,u8c:1,i8:1,u16:2,i16:2,u32:4,i32:4,i64:8,u64:8,f32:4,f64:8},Ui=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Xi=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],Zi=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],qi=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],la=(t,r,e)=>{let a=t;return typeof r=="string"||Array.isArray(r)?a=t.toLocaleString(r,e):(r===!0||e!==void 0)&&(a=t.toLocaleString(void 0,e)),a};function Hi(t,r){if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);r={bits:!1,binary:!1,space:!0,...r};const e=r.bits?r.binary?qi:Zi:r.binary?Xi:Ui,a=r.space?" ":"";if(r.signed&&t===0)return` 0${a}${e[0]}`;const n=t<0,i=n?"-":r.signed?"+":"";n&&(t=-t);let s;if(r.minimumFractionDigits!==void 0&&(s={minimumFractionDigits:r.minimumFractionDigits}),r.maximumFractionDigits!==void 0&&(s={maximumFractionDigits:r.maximumFractionDigits,...s}),t<1){const f=la(t,r.locale,s);return i+f+a+e[0]}const h=Math.min(Math.floor(r.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),e.length-1);t/=(r.binary?1024:1e3)**h,s||(t=t.toPrecision(3));const v=la(Number(t),r.locale,s),o=e[h];return i+v+a+o}const Wi=8192;class da{constructor(r){if(this.onGrowBufferHandlers=[],r&&"buffers"in r)this.buffers=r.buffers.map(e=>new Kr({buf:e,skipInitialization:!0})),this.memory=new rt(this,{bufferPosition:0,bufferByteOffset:40}),this.isClone=!0;else{const e=(r==null?void 0:r.bufferSize)??Wi;if(e>Xr)throw new Error(`Buffer size ${e} is greater than max ${Xr} that we can reference with pointers`);let a=this.createBuffer(e);this.buffers=[a];const n=a.callocAs("u32",1);if(n)this.memory=new rt(this,{bufferPosition:0,bufferByteOffset:n.byteOffset});else throw new Error("Failed to initialize first byte from buffer");this.memory.data[0]=e,this.isClone=!1;for(let i=1;i<((r==null?void 0:r.initialBuffers)??1);i++)this.buffers.push(this.createBuffer(e))}}get bufferSize(){return this.memory.data[0]}addSharedBuffer(r){this.buffers.push(new Kr({buf:r,skipInitialization:!0}))}createBuffer(r){if(this.isClone)throw new Error("Creating new buffer from worker threads not currently supported");return new Kr({buf:new SharedArrayBuffer(r??this.bufferSize)})}allocUI32(r){for(let n=0;n<this.buffers.length;n++){const i=this.buffers[n],s=i.callocAs("u32",r);if(s)return new rt(this,{data:s,buffer:i})}if(this.buffers.length>=aa)throw new Error(`Can't initialize a new buffer since it would have a position greater than the max of ${aa}`);const e=this.createBuffer();this.buffers.push(e),this.onGrowBufferHandlers.forEach(n=>n(e.buf));const a=e.callocAs("u32",r);if(a)return new rt(this,{data:a,buffer:e});throw new Error(`Unable to allocate ${r} numbers even after adding a new buffer`)}get currentUsed(){return this.totalAllocated-this.buffers.reduce((r,e)=>r+e.stats().available,0)}get totalAllocated(){return this.buffers[0].buf.byteLength*this.buffers.length}prettyMemory(){return`${ma(this.currentUsed)} / ${ma(this.totalAllocated)}`}getSharedMemory(){return{buffers:this.buffers.map(r=>r.buf)}}}function ma(t){return Hi(t,{binary:!0,minimumFractionDigits:1,maximumFractionDigits:1})}const Ma=4,wa=1,Bt=2,Qe=class Qe{get length(){return Atomics.load(this.firstBlock.data,Bt)}get type(){return Atomics.load(this.uint16Array,0)}set type(r){Atomics.store(this.uint16Array,0,r)}get dataLength(){return Math.max(1,Atomics.load(this.uint16Array,1))}set dataLength(r){Atomics.store(this.uint16Array,1,r)}constructor(r,e){if(this.memory=r,e&&"firstBlock"in e)this.firstBlock=new rt(r,e.firstBlock),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+(Bt+1)*Uint32Array.BYTES_PER_ELEMENT,2);else{e&&e.initWithBlock?(this.firstBlock=new rt(r,e.initWithBlock),console.log(`init block at ${this.firstBlock.data.byteOffset}`)):this.firstBlock=r.allocUI32(Ma),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+(Bt+1)*Uint32Array.BYTES_PER_ELEMENT,2);const a=(e==null?void 0:e.type)??Uint32Array;a===Uint32Array?this.type=0:a===Int32Array?this.type=1:a===Float32Array&&(this.type=2),this.dataLength=(e==null?void 0:e.dataLength)??1}}insert(r){typeof r=="number"&&(r=[r]);let e=this.dataLength;if(r.length>e)throw new Error(`Can't insert ${r.length} array into shared list of ${e} dataLength`);let a=this.memory.allocUI32(wa+e),n=this.getDataBlock(a.data),i=a.pointer;for(let v=0;v<r.length;v++)n instanceof Int32Array||n instanceof Uint32Array?Atomics.store(n,v,r[v]):n[v]=r[v];let s,h=!1;for(;!h;)s=Ai(this.firstBlock.data,1),h=Ri(this.firstBlock.data,1,i,s);if(s){let{bufferPosition:v,bufferByteOffset:o}=Zr(s),f=new Uint32Array(this.memory.buffers[v].buf,o,1);ia(f,0,i)}else ia(this.firstBlock.data,0,i),console.log(`insert first block ${i} at ${this.firstBlock.data.byteOffset}`);Atomics.add(this.firstBlock.data,Bt,1)}deleteMatch(r){for(let{data:e,index:a,deleteCurrent:n}of this)if(r(e,a))return n(),!0;return!1}deleteIndex(r){return r>=this.length||r<0?!1:this.deleteMatch((e,a)=>a===r)}deleteValue(r){return typeof r=="number"?this.deleteMatch(e=>e[0]===r):this.deleteMatch(e=>{if(e.length!==r.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==r[a])return!1;return!0})}*[Symbol.iterator](){let r=0,{bufferPosition:e,bufferByteOffset:a}=ar(this.firstBlock.data,0);console.log(`checking first block: ${a} at ${this.firstBlock.data.byteOffset}`);let n=this.firstBlock.data,i=0,s=0;for(;a;){let h=this.memory.buffers[e],v=new Uint32Array(h.buf,a,2),o=this.getDataBlock(v),f=e,y=a;({bufferPosition:e,bufferByteOffset:a}=ar(v,0));let u=!0;yield{data:o,index:r,deleteCurrent:()=>{na(n,0,e,a),a||na(this.firstBlock.data,1,i,s),h.free(v.byteOffset),Atomics.sub(this.firstBlock.data,Bt,1),u=!1}},u&&(n=v,i=f,s=y,r++)}}forEach(r){for(let e of this)r(e.data)}getSharedMemory(){return{firstBlock:this.firstBlock.getSharedMemory()}}getDataBlock(r){const e=r.byteOffset+wa*r.BYTES_PER_ELEMENT;switch(this.type){case 1:return new Int32Array(r.buffer,e,this.dataLength);case 0:return new Uint32Array(r.buffer,e,this.dataLength);case 2:return new Float32Array(r.buffer,e,this.dataLength);default:throw new Error(`Unknown data block type ${this.type}`)}}free(){let{bufferPosition:r,bufferByteOffset:e}=ar(this.firstBlock.data,0);for(;e;){let a=new rt(this.memory,{bufferPosition:r,bufferByteOffset:e});({bufferPosition:r,bufferByteOffset:e}=ar(a.data,0)),a.free()}this.firstBlock.free()}};Qe.ALLOCATE_COUNT=Ma;let _t=Qe;const Qi=new ArrayBuffer(8);new BigUint64Array(Qi);const ji=0,Jr=1,_a=2,Nr=class Nr{constructor(r,e){F(this,"world");F(this,"memory");F(this,"takenMemoryBytes",0);F(this,"_id");F(this,"positionMemory");F(this,"key","boid");F(this,"shieldMemory");F(this,"getSprite");this.world=r,"size"in e?(this.memory=r.heap.allocUI32(e.size+Nr.ALLOCATE_COUNT),this.memory.data[Jr]=r.getId(),this.memory.data[ji]=e.type):e instanceof rt?this.memory=e:this.memory=new rt(r.heap,e),this._id=this.memory.data[Jr],this.takenMemoryBytes+=3*this.memory.data.BYTES_PER_ELEMENT,this.positionMemory=this.getArrayFromMemory(Float32Array,5),this.shieldMemory=this.getArrayFromMemory(Float32Array,5)}get id(){return this._id}get dead(){return this._id!==this.memory.data[Jr]||!!this.memory.data[_a]}set dead(r){this.memory.data[_a]=r?1:0}get x(){return this.positionMemory[0]}set x(r){this.positionMemory[0]=r}get y(){return this.positionMemory[1]}set y(r){this.positionMemory[1]=r}get width(){return this.positionMemory[2]}set width(r){this.positionMemory[2]=r}get height(){return this.positionMemory[3]}set height(r){this.positionMemory[3]=r}get angle(){return this.positionMemory[4]}set angle(r){this.positionMemory[4]=r}get shields(){return this.shieldMemory[0]}set shields(r){this.shieldMemory[0]=r}get maxShields(){return this.shieldMemory[1]}set maxShields(r){this.shieldMemory[1]=r}get timeToRegenerateShields(){return this.shieldMemory[2]}set timeToRegenerateShields(r){this.shieldMemory[2]=r}get timeSinceShieldRegeneration(){return this.shieldMemory[3]}set timeSinceShieldRegeneration(r){this.shieldMemory[3]=r}get timeSinceTakenDamage(){return this.shieldMemory[4]}set timeSinceTakenDamage(r){this.shieldMemory[4]=r}load(r){Object.keys(r).forEach(e=>{this[e]=r[e]})}die(){this.dead=!0,this.world.removeEntity(this),this.memory.free()}canTakeDamage(){return this.timeSinceTakenDamage>=.2&&!this.dead}takeDamage(r){this.canTakeDamage()&&(this.shields-=r,this.timeSinceTakenDamage=0,this.shields<0&&this.die())}getArrayFromMemory(r,e){let a=this.getAllocatedFromMemory(e);return new r(this.memory.data.buffer,a.bufferByteOffset,e)}getAllocatedFromMemory(r){let e=this.takenMemoryBytes;return this.takenMemoryBytes+=r*4,{bufferPosition:this.memory.bufferPosition,bufferByteOffset:this.memory.data.byteOffset+e}}get pointer(){return this.memory.pointer}};F(Nr,"ALLOCATE_COUNT",13);let hr=Nr;var Ft=(t=>(t[t.ship=1]="ship",t[t.station=2]="station",t))(Ft||{});class ga extends hr{constructor(e,a){var r=(...nM)=>(super(...nM),F(this,"station"),F(this,"uintMemory"),F(this,"velocityMemory"),this);"bufferPosition"in a?(r(e,a),this.velocityMemory=this.getArrayFromMemory(Float32Array,3),this.uintMemory=this.getArrayFromMemory(Uint32Array,2),this.station=this.world.getEntityByPointer(this.uintMemory[0])):(r(e,{size:5,type:Ft.ship}),this.velocityMemory=this.getArrayFromMemory(Float32Array,3),this.uintMemory=this.getArrayFromMemory(Uint32Array,2),this.width=10,this.height=5,this.speed=100,this.shields=1,this.maxShields=1,this.timeToRegenerateShields=1,this.station=a.station,this.uintMemory[0]=this.station.pointer)}get speed(){return this.velocityMemory[0]}set speed(e){this.velocityMemory[0]=e}get velocityX(){return this.velocityMemory[1]}set velocityX(e){this.velocityMemory[1]=e}get velocityY(){return this.velocityMemory[2]}set velocityY(e){this.velocityMemory[2]=e}get targetPointer(){return Atomics.load(this.uintMemory,1)}set targetPointer(e){Atomics.store(this.uintMemory,1,e)}get color(){return this.station.color}die(){this.dead||(this.station.removeShip(this),super.die())}}class vt{constructor(r,e){F(this,"world");F(this,"list");F(this,"entityCache",new Map);this.world=r,e?this.list=new _t(r.heap,e):this.list=new _t(r.heap)}get length(){return this.list.length}insert(r){this.list.insert(r.pointer),this.entityCache.set(r.pointer,r)}delete(r){return this.entityCache.delete(r.pointer),this.list.deleteValue(r.pointer)}*[Symbol.iterator](){let r=this.list[Symbol.iterator]();for(let{data:e,deleteCurrent:a}of r){let n=Atomics.load(e,0),i=this.world.getEntityByPointer(n);i&&(yield{entity:i,deleteCurrent:a})}}forEach(r,e){for(let{entity:a}of this)(!e||e(a))&&r(a)}find(r){for(let{entity:e}of this)if(r(e))return e}filter(r){let e=[];for(let{entity:a}of this)r(a)&&e.push(a);return e}map(r){let e=[];for(let{entity:a}of this)e.push(r(a));return e}getSharedMemory(){return this.list.getSharedMemory()}free(){this.list.free()}}F(vt,"ALLOCATE_COUNT",_t.ALLOCATE_COUNT);const vr=0,ba=1;class $a extends hr{constructor(e,a){var r=(...iM)=>(super(...iM),F(this,"ships"),F(this,"moneyMemory"),this);a?(r(e,a),this.moneyMemory=this.getArrayFromMemory(Uint32Array,2),this.ships=new vt(this.world,{initWithBlock:this.getAllocatedFromMemory(vt.ALLOCATE_COUNT)})):(r(e,{size:2+vt.ALLOCATE_COUNT,type:Ft.station}),this.moneyMemory=this.getArrayFromMemory(Uint32Array,2),this.ships=new vt(this.world,{firstBlock:this.getAllocatedFromMemory(vt.ALLOCATE_COUNT)}),this.width=20,this.height=20,this.shields=2,this.maxShields=2,this.timeToRegenerateShields=5),this.key="station"}get money(){return Atomics.load(this.moneyMemory,vr)}set money(e){Atomics.store(this.moneyMemory,vr,e)}get color(){return this.moneyMemory[ba]}set color(e){this.moneyMemory[ba]=e}addMoney(e){Atomics.add(this.moneyMemory,vr,e)}subtractMoney(e){Atomics.sub(this.moneyMemory,vr,e)}removeShip(e){this.dead||this.ships.delete(e)}die(){this.dead||(this.ships.forEach(e=>{e.die()}),this.ships.free(),super.die())}}const Ki=0,Ca=1,Ta=2,Pa=3,kr=class kr{constructor(r){F(this,"entities");F(this,"entityCache",new Map);F(this,"bounds");F(this,"heap");F(this,"memory");r?(this.heap=new da(r.heap),this.memory=new rt(this.heap,r.world),this.entities=new vt(this,{firstBlock:{bufferPosition:this.memory.bufferPosition,bufferByteOffset:this.memory.data.byteOffset+Pa*this.memory.data.BYTES_PER_ELEMENT}})):(this.heap=new da({bufferSize:Xr}),this.memory=this.heap.allocUI32(kr.ALLOCATE_COUNT),this.entities=new vt(this,{initWithBlock:{bufferPosition:this.memory.bufferPosition,bufferByteOffset:this.memory.data.byteOffset+Pa*this.memory.data.BYTES_PER_ELEMENT}}));let e=this.memory;this.bounds={get width(){return e.data[Ca]},set width(a){e.data[Ca]=a},get height(){return e.data[Ta]},set height(a){e.data[Ta]=a}}}load(r){r.entities.forEach(e=>{let a;switch(e.type){case"station":a=new $a(this);break;default:throw new Error(`Invalid entity type: ${e.type}`)}a.load(e),this.addEntity(a)}),r.bounds&&(this.bounds.width=r.bounds.width,this.bounds.height=r.bounds.height)}addEntity(r){this.entities.insert(r)}removeEntity(r){this.entities.delete(r)}getEntityByPointer(r){if(!r)return;let e=this.entityCache.get(r);if(e!=null&&e.dead&&(this.entityCache.delete(r),e=void 0),!e){let a=new rt(this.heap,Zr(r)),n=a.data[0];n===Ft.ship?e=new ga(this,a):n===Ft.station&&(e=new $a(this,a)),e&&this.entityCache.set(r,e)}return e}update(r){this.garbageCollect()}garbageCollect(){this.entities.forEach(r=>{r.dead&&this.entityCache.delete(r.pointer)})}getId(){return Atomics.add(this.memory.data,Ki,1)}getSharedMemory(){return{heap:this.heap.getSharedMemory(),world:this.memory.getSharedMemory()}}};F(kr,"ALLOCATE_COUNT",3+_t.ALLOCATE_COUNT);let te=kr;function Ji(t){let r,e;self.onmessage=function(a){a.data.init?(r=new te(a.data.init),e=t(r)):a.data.elapsedTime&&(e.run(a.data.elapsedTime),r.garbageCollect(),self.postMessage({done:!0}))}}function za(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ts={CIRCLE:0,ELLIPSE:1,LINE:2,POINT:3,POLYGON:4,RECTANGLE:5,TRIANGLE:6},ot=ts;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rs=function(t){if(!t||typeof t!="object"||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}return!0},es=rs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pa=es,Oa=function(){var t,r,e,a,n,i,s=arguments[0]||{},h=1,v=arguments.length,o=!1;for(typeof s=="boolean"&&(o=s,s=arguments[1]||{},h=2),v===h&&(s=this,--h);h<v;h++)if((t=arguments[h])!=null)for(r in t)e=s[r],a=t[r],s!==a&&(o&&a&&(pa(a)||(n=Array.isArray(a)))?(n?(n=!1,i=e&&Array.isArray(e)?e:[]):i=e&&pa(e)?e:{},s[r]=Oa(o,i,a)):a!==void 0&&(s[r]=a));return s},Ia=Oa;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function as(t){return!!t.get&&typeof t.get=="function"||!!t.set&&typeof t.set=="function"}function ns(t,r,e){var a=e?t[r]:Object.getOwnPropertyDescriptor(t,r);return!e&&a.value&&typeof a.value=="object"&&(a=a.value),a&&as(a)?(typeof a.enumerable>"u"&&(a.enumerable=!0),typeof a.configurable>"u"&&(a.configurable=!0),a):!1}function is(t,r){var e=Object.getOwnPropertyDescriptor(t,r);return e?(e.value&&typeof e.value=="object"&&(e=e.value),e.configurable===!1):!1}function re(t,r,e,a){for(var n in r)if(r.hasOwnProperty(n)){var i=ns(r,n,e);if(i!==!1){var s=a||t;if(is(s.prototype,n)){if(Nt.ignoreFinals)continue;throw new Error("cannot override final property '"+n+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,n,i)}else t.prototype[n]=r[n]}}function Ea(t,r){if(r){Array.isArray(r)||(r=[r]);for(var e=0;e<r.length;e++)re(t,r[e].prototype||r[e])}}function Nt(t){t||(t={});var r,e;if(t.initialize){if(typeof t.initialize!="function")throw new Error("initialize must be a function");r=t.initialize,delete t.initialize}else if(t.Extends){var a=t.Extends;r=function(){a.apply(this,arguments)}}else r=function(){};t.Extends?(r.prototype=Object.create(t.Extends.prototype),r.prototype.constructor=r,e=t.Extends,delete t.Extends):r.prototype.constructor=r;var n=null;return t.Mixins&&(n=t.Mixins,delete t.Mixins),Ea(r,n),re(r,t,!0,e),r}Nt.extend=re,Nt.mixin=Ea,Nt.ignoreFinals=!1;var Y=Nt;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ss=function(t,r,e){if(t.radius>0&&r>=t.left&&r<=t.right&&e>=t.top&&e<=t.bottom){var a=(t.x-r)*(t.x-r),n=(t.y-e)*(t.y-e);return a+n<=t.radius*t.radius}else return!1},kt=ss;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hs=Y,vs=ot,os=new hs({initialize:function(r,e){r===void 0&&(r=0),e===void 0&&(e=r),this.type=vs.POINT,this.x=r,this.y=e},setTo:function(t,r){return t===void 0&&(t=0),r===void 0&&(r=t),this.x=t,this.y=r,this}}),O=os;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fs=O,us=function(t,r,e){return e===void 0&&(e=new fs),e.x=t.x+t.radius*Math.cos(r),e.y=t.y+t.radius*Math.sin(r),e},ee=us;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ys=function(t,r,e){return Math.max(r,Math.min(e,t))},ae=ys;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cs=ae,xs=function(t,r,e){return t=cs(t,0,1),(e-r)*t+r},Dt=xs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ls={PI2:Math.PI*2,TAU:Math.PI*.5,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:null,MIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER||-9007199254740991,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991},W=ls;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ds=ee,ms=Dt,Ms=W,ws=O,_s=function(t,r,e){e===void 0&&(e=new ws);var a=ms(r,0,Ms.PI2);return ds(t,a,e)},Sa=_s;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gs=function(t){return 2*(Math.PI*t.radius)},Aa=gs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bs=Aa,$s=ee,Cs=Dt,Ts=W,Ps=function(t,r,e,a){a===void 0&&(a=[]),!r&&e>0&&(r=bs(t)/e);for(var n=0;n<r;n++){var i=Cs(n/r,0,Ts.PI2);a.push($s(t,i))}return a},Ra=Ps;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zs=O,ps=function(t,r){r===void 0&&(r=new zs);var e=2*Math.PI*Math.random(),a=Math.random()+Math.random(),n=a>1?2-a:a,i=n*Math.cos(e),s=n*Math.sin(e);return r.x=t.x+i*t.radius,r.y=t.y+s*t.radius,r},La=ps;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Os=Y,Is=kt,Es=Sa,Ss=Ra,As=ot,Rs=La,Ls=new Os({initialize:function(r,e,a){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),this.type=As.CIRCLE,this.x=r,this.y=e,this._radius=a,this._diameter=a*2},contains:function(t,r){return Is(this,t,r)},getPoint:function(t,r){return Es(this,t,r)},getPoints:function(t,r,e){return Ss(this,t,r,e)},getRandomPoint:function(t){return Rs(this,t)},setTo:function(t,r,e){return this.x=t,this.y=r,this._radius=e,this._diameter=e*2,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=t*2}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=t*.5}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}}),ne=Ls;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gs=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0},Bs=Gs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fs=ne,Ns=function(t){return new Fs(t.x,t.y,t.radius)},ks=Ns;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ds=kt,Vs=function(t,r){return Ds(t,r.x,r.y)},Ys=Vs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var or=kt,Us=function(t,r){return or(t,r.x,r.y)&&or(t,r.right,r.y)&&or(t,r.x,r.bottom)&&or(t,r.right,r.bottom)},Xs=Us;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zs=function(t,r){return r.setTo(t.x,t.y,t.radius)},qs=Zs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hs=function(t,r){return t.x===r.x&&t.y===r.y&&t.radius===r.radius},Ws=Hs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qs=function(t,r,e){return t.width<=0||t.height<=0?!1:t.x<=r&&t.x+t.width>=r&&t.y<=e&&t.y+t.height>=e},fr=Qs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var js=function(t){return 2*(t.width+t.height)},ur=js;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ks=ur,Js=O,th=function(t,r,e){if(e===void 0&&(e=new Js),r<=0||r>=1)return e.x=t.x,e.y=t.y,e;var a=Ks(t)*r;return r>.5?(a-=t.width+t.height,a<=t.width?(e.x=t.right-a,e.y=t.bottom):(e.x=t.x,e.y=t.bottom-(a-t.width))):a<=t.width?(e.x=t.x+a,e.y=t.y):(e.x=t.right,e.y=t.y+(a-t.width)),e},ie=th;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rh=ie,eh=ur,ah=function(t,r,e,a){a===void 0&&(a=[]),!r&&e>0&&(r=eh(t)/e);for(var n=0;n<r;n++){var i=n/r;a.push(rh(t,i))}return a},Ga=ah;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nh=O,ih=function(t,r,e){return e===void 0&&(e=new nh),e.x=t.x1+(t.x2-t.x1)*r,e.y=t.y1+(t.y2-t.y1)*r,e},Ba=ih;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sh=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))},ft=sh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hh=ft,vh=O,oh=function(t,r,e,a){a===void 0&&(a=[]),!r&&e>0&&(r=hh(t)/e);for(var n=t.x1,i=t.y1,s=t.x2,h=t.y2,v=0;v<r;v++){var o=v/r,f=n+(s-n)*o,y=i+(h-i)*o;a.push(new vh(f,y))}return a},Fa=oh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fh=O,uh=function(t,r){r===void 0&&(r=new fh);var e=Math.random();return r.x=t.x1+e*(t.x2-t.x1),r.y=t.y1+e*(t.y2-t.y1),r},Na=uh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yh=function(t,r,e){return e===void 0&&(e=1e-4),Math.abs(t-r)<e},ka=yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ch=Y,Da=ka,Q=new ch({initialize:function(r,e){this.x=0,this.y=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0):(e===void 0&&(e=r),this.x=r||0,this.y=e||0)},clone:function(){return new Q(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setTo:function(t,r){return this.set(t,r)},setToPolar:function(t,r){return r==null&&(r=1),this.x=Math.cos(t)*r,this.y=Math.sin(t)*r,this},equals:function(t){return this.x===t.x&&this.y===t.y},fuzzyEquals:function(t,r){return Da(this.x,t.x,r)&&Da(this.y,t.y,r)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},setAngle:function(t){return this.setToPolar(t,this.length())},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var r=t.x-this.x,e=t.y-this.y;return Math.sqrt(r*r+e*e)},distanceSq:function(t){var r=t.x-this.x,e=t.y-this.y;return r*r+e*e},length:function(){var t=this.x,r=this.y;return Math.sqrt(t*t+r*r)},setLength:function(t){return this.normalize().scale(t)},lengthSq:function(){var t=this.x,r=this.y;return t*t+r*r},normalize:function(){var t=this.x,r=this.y,e=t*t+r*r;return e>0&&(e=1/Math.sqrt(e),this.x=t*e,this.y=r*e),this},normalizeRightHand:function(){var t=this.x;return this.x=this.y*-1,this.y=t,this},normalizeLeftHand:function(){var t=this.x;return this.x=this.y,this.y=t*-1,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,r){r===void 0&&(r=0);var e=this.x,a=this.y;return this.x=e+r*(t.x-e),this.y=a+r*(t.y-a),this},transformMat3:function(t){var r=this.x,e=this.y,a=t.val;return this.x=a[0]*r+a[3]*e+a[6],this.y=a[1]*r+a[4]*e+a[7],this},transformMat4:function(t){var r=this.x,e=this.y,a=t.val;return this.x=a[0]*r+a[4]*e+a[12],this.y=a[1]*r+a[5]*e+a[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(t){var r=this.length();return r&&r>t&&this.scale(t/r),this},reflect:function(t){return t=t.clone().normalize(),this.subtract(t.scale(2*this.dot(t)))},mirror:function(t){return this.reflect(t).negate()},rotate:function(t){var r=Math.cos(t),e=Math.sin(t);return this.set(r*this.x-e*this.y,e*this.x+r*this.y)},project:function(t){var r=this.dot(t)/t.dot(t);return this.copy(t).scale(r)}});Q.ZERO=new Q,Q.RIGHT=new Q(1,0),Q.LEFT=new Q(-1,0),Q.UP=new Q(0,-1),Q.DOWN=new Q(0,1),Q.ONE=new Q(1,1);var gt=Q;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xh=Y,lh=Ba,dh=Fa,mh=ot,Mh=Na,Va=gt,wh=new xh({initialize:function(r,e,a,n){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=mh.LINE,this.x1=r,this.y1=e,this.x2=a,this.y2=n},getPoint:function(t,r){return lh(this,t,r)},getPoints:function(t,r,e){return dh(this,t,r,e)},getRandomPoint:function(t){return Mh(this,t)},setTo:function(t,r,e,a){return t===void 0&&(t=0),r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),this.x1=t,this.y1=r,this.x2=e,this.y2=a,this},setFromObjects:function(t,r){return this.x1=t.x,this.y1=t.y,this.x2=r.x,this.y2=r.y,this},getPointA:function(t){return t===void 0&&(t=new Va),t.set(this.x1,this.y1),t},getPointB:function(t){return t===void 0&&(t=new Va),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}}),ut=wh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _h=O,gh=function(t,r){return r===void 0&&(r=new _h),r.x=t.x+Math.random()*t.width,r.y=t.y+Math.random()*t.height,r},Ya=gh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bh=Y,$h=fr,Ch=ie,Th=Ga,Ph=ot,yr=ut,zh=Ya,ph=new bh({initialize:function(r,e,a,n){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=Ph.RECTANGLE,this.x=r,this.y=e,this.width=a,this.height=n},contains:function(t,r){return $h(this,t,r)},getPoint:function(t,r){return Ch(this,t,r)},getPoints:function(t,r,e){return Th(this,t,r,e)},getRandomPoint:function(t){return zh(this,t)},setTo:function(t,r,e,a){return this.x=t,this.y=r,this.width=e,this.height=a,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return t===void 0&&(t=new yr),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return t===void 0&&(t=new yr),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return t===void 0&&(t=new yr),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return t===void 0&&(t=new yr),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),J=ph;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oh=J,Ih=function(t,r){return r===void 0&&(r=new Oh),r.x=t.left,r.y=t.top,r.width=t.diameter,r.height=t.diameter,r},Eh=Ih;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sh=function(t,r,e){return t.x+=r,t.y+=e,t},Ah=Sh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rh=function(t,r){return t.x+=r.x,t.y+=r.y,t},Lh=Rh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U=ne;U.Area=Bs,U.Circumference=Aa,U.CircumferencePoint=ee,U.Clone=ks,U.Contains=kt,U.ContainsPoint=Ys,U.ContainsRect=Xs,U.CopyFrom=qs,U.Equals=Ws,U.GetBounds=Eh,U.GetPoint=Sa,U.GetPoints=Ra,U.Offset=Ah,U.OffsetPoint=Lh,U.Random=La;var Gh=U;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bh=function(t,r,e){if(t.width<=0||t.height<=0)return!1;var a=(r-t.x)/t.width,n=(e-t.y)/t.height;return a*=a,n*=n,a+n<.25},cr=Bh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fh=O,Nh=function(t,r,e){e===void 0&&(e=new Fh);var a=t.width/2,n=t.height/2;return e.x=t.x+a*Math.cos(r),e.y=t.y+n*Math.sin(r),e},se=Nh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kh=se,Dh=Dt,Vh=W,Yh=O,Uh=function(t,r,e){e===void 0&&(e=new Yh);var a=Dh(r,0,Vh.PI2);return kh(t,a,e)},Ua=Uh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xh=function(t){var r=t.width/2,e=t.height/2,a=Math.pow(r-e,2)/Math.pow(r+e,2);return Math.PI*(r+e)*(1+3*a/(10+Math.sqrt(4-3*a)))},Xa=Xh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zh=Xa,qh=se,Hh=Dt,Wh=W,Qh=function(t,r,e,a){a===void 0&&(a=[]),!r&&e>0&&(r=Zh(t)/e);for(var n=0;n<r;n++){var i=Hh(n/r,0,Wh.PI2);a.push(qh(t,i))}return a},Za=Qh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jh=O,Kh=function(t,r){r===void 0&&(r=new jh);var e=Math.random()*Math.PI*2,a=Math.sqrt(Math.random());return r.x=t.x+a*Math.cos(e)*t.width/2,r.y=t.y+a*Math.sin(e)*t.height/2,r},qa=Kh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jh=Y,tv=cr,rv=Ua,ev=Za,av=ot,nv=qa,iv=new Jh({initialize:function(r,e,a,n){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=av.ELLIPSE,this.x=r,this.y=e,this.width=a,this.height=n},contains:function(t,r){return tv(this,t,r)},getPoint:function(t,r){return rv(this,t,r)},getPoints:function(t,r,e){return ev(this,t,r,e)},getRandomPoint:function(t){return nv(this,t)},setTo:function(t,r,e,a){return this.x=t,this.y=r,this.width=e,this.height=a,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),Ha=iv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sv=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI},hv=sv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vv=Ha,ov=function(t){return new vv(t.x,t.y,t.width,t.height)},fv=ov;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uv=cr,yv=function(t,r){return uv(t,r.x,r.y)},cv=yv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xr=cr,xv=function(t,r){return xr(t,r.x,r.y)&&xr(t,r.right,r.y)&&xr(t,r.x,r.bottom)&&xr(t,r.right,r.bottom)},lv=xv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dv=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},mv=dv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mv=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},wv=Mv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _v=J,gv=function(t,r){return r===void 0&&(r=new _v),r.x=t.left,r.y=t.top,r.width=t.width,r.height=t.height,r},bv=gv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $v=function(t,r,e){return t.x+=r,t.y+=e,t},Cv=$v;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tv=function(t,r){return t.x+=r.x,t.y+=r.y,t},Pv=Tv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var X=Ha;X.Area=hv,X.Circumference=Xa,X.CircumferencePoint=se,X.Clone=fv,X.Contains=cr,X.ContainsPoint=cv,X.ContainsRect=lv,X.CopyFrom=mv,X.Equals=wv,X.GetBounds=bv,X.GetPoint=Ua,X.GetPoints=Za,X.Offset=Cv,X.OffsetPoint=Pv,X.Random=qa;var zv=X;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pv=function(t,r,e,a){var n=t-e,i=r-a;return Math.sqrt(n*n+i*i)},Wa=pv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ov=Wa,Iv=function(t,r){return Ov(t.x,t.y,r.x,r.y)<=t.radius+r.radius},Qa=Iv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ev=function(t,r){var e=r.width/2,a=r.height/2,n=Math.abs(t.x-r.x-e),i=Math.abs(t.y-r.y-a),s=e+t.radius,h=a+t.radius;if(n>s||i>h)return!1;if(n<=e||i<=a)return!0;var v=n-e,o=i-a,f=v*v,y=o*o,u=t.radius*t.radius;return f+y<=u},ja=Ev;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bt=O,Sv=Qa,Av=function(t,r,e){if(e===void 0&&(e=[]),Sv(t,r)){var a=t.x,n=t.y,i=t.radius,s=r.x,h=r.y,v=r.radius,o,f,y,u,c;if(n===h)c=(v*v-i*i-s*s+a*a)/(2*(a-s)),o=1,f=-2*h,y=s*s+c*c-2*s*c+h*h-v*v,u=f*f-4*o*y,u===0?e.push(new bt(c,-f/(2*o))):u>0&&(e.push(new bt(c,(-f+Math.sqrt(u))/(2*o))),e.push(new bt(c,(-f-Math.sqrt(u))/(2*o))));else{var x=(a-s)/(n-h),l=(v*v-i*i-s*s+a*a-h*h+n*n)/(2*(n-h));o=x*x+1,f=2*n*x-2*l*x-2*a,y=a*a+n*n+l*l-i*i-2*n*l,u=f*f-4*o*y,u===0?(c=-f/(2*o),e.push(new bt(c,l-c*x))):u>0&&(c=(-f+Math.sqrt(u))/(2*o),e.push(new bt(c,l-c*x)),c=(-f-Math.sqrt(u))/(2*o),e.push(new bt(c,l-c*x)))}}return e},Rv=Av;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var he=kt,Lv=O,Gv=new Lv,Bv=function(t,r,e){if(e===void 0&&(e=Gv),he(r,t.x1,t.y1))return e.x=t.x1,e.y=t.y1,!0;if(he(r,t.x2,t.y2))return e.x=t.x2,e.y=t.y2,!0;var a=t.x2-t.x1,n=t.y2-t.y1,i=r.x-t.x1,s=r.y-t.y1,h=a*a+n*n,v=a,o=n;if(h>0){var f=(i*a+s*n)/h;v*=f,o*=f}e.x=t.x1+v,e.y=t.y1+o;var y=v*v+o*o;return y<=h&&v*a+o*n>=0&&he(r,e.x,e.y)},ve=Bv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var oe=O,Fv=ve,Nv=function(t,r,e){if(e===void 0&&(e=[]),Fv(t,r)){var a=t.x1,n=t.y1,i=t.x2,s=t.y2,h=r.x,v=r.y,o=r.radius,f=i-a,y=s-n,u=a-h,c=n-v,x=f*f+y*y,l=2*(f*u+y*c),d=u*u+c*c-o*o,M=l*l-4*x*d,w,m;if(M===0){var _=-l/(2*x);w=a+_*f,m=n+_*y,_>=0&&_<=1&&e.push(new oe(w,m))}else if(M>0){var g=(-l-Math.sqrt(M))/(2*x);w=a+g*f,m=n+g*y,g>=0&&g<=1&&e.push(new oe(w,m));var b=(-l+Math.sqrt(M))/(2*x);w=a+b*f,m=n+b*y,b>=0&&b<=1&&e.push(new oe(w,m))}}return e},fe=Nv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lr=fe,kv=ja,Dv=function(t,r,e){if(e===void 0&&(e=[]),kv(t,r)){var a=r.getLineA(),n=r.getLineB(),i=r.getLineC(),s=r.getLineD();lr(a,t,e),lr(n,t,e),lr(i,t,e),lr(s,t,e)}return e},Vv=Dv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yv=Y,V=new Yv({initialize:function(r,e,a){this.x=0,this.y=0,this.z=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0):(this.x=r||0,this.y=e||0,this.z=a||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new V(this.x,this.y,this.z)},addVectors:function(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this},crossVectors:function(t,r){var e=t.x,a=t.y,n=t.z,i=r.x,s=r.y,h=r.z;return this.x=a*h-n*s,this.y=n*i-e*h,this.z=e*s-a*i,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,r,e){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=r||0,this.z=e||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,r){return this.fromArray(t.val,r*4)},fromArray:function(t,r){return r===void 0&&(r=0),this.x=t[r],this.y=t[r+1],this.z=t[r+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var r=t.x-this.x,e=t.y-this.y,a=t.z-this.z||0;return Math.sqrt(r*r+e*e+a*a)},distanceSq:function(t){var r=t.x-this.x,e=t.y-this.y,a=t.z-this.z||0;return r*r+e*e+a*a},length:function(){var t=this.x,r=this.y,e=this.z;return Math.sqrt(t*t+r*r+e*e)},lengthSq:function(){var t=this.x,r=this.y,e=this.z;return t*t+r*r+e*e},normalize:function(){var t=this.x,r=this.y,e=this.z,a=t*t+r*r+e*e;return a>0&&(a=1/Math.sqrt(a),this.x=t*a,this.y=r*a,this.z=e*a),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var r=this.x,e=this.y,a=this.z,n=t.x,i=t.y,s=t.z;return this.x=e*s-a*i,this.y=a*n-r*s,this.z=r*i-e*n,this},lerp:function(t,r){r===void 0&&(r=0);var e=this.x,a=this.y,n=this.z;return this.x=e+r*(t.x-e),this.y=a+r*(t.y-a),this.z=n+r*(t.z-n),this},applyMatrix3:function(t){var r=this.x,e=this.y,a=this.z,n=t.val;return this.x=n[0]*r+n[3]*e+n[6]*a,this.y=n[1]*r+n[4]*e+n[7]*a,this.z=n[2]*r+n[5]*e+n[8]*a,this},applyMatrix4:function(t){var r=this.x,e=this.y,a=this.z,n=t.val,i=1/(n[3]*r+n[7]*e+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*e+n[8]*a+n[12])*i,this.y=(n[1]*r+n[5]*e+n[9]*a+n[13])*i,this.z=(n[2]*r+n[6]*e+n[10]*a+n[14])*i,this},transformMat3:function(t){var r=this.x,e=this.y,a=this.z,n=t.val;return this.x=r*n[0]+e*n[3]+a*n[6],this.y=r*n[1]+e*n[4]+a*n[7],this.z=r*n[2]+e*n[5]+a*n[8],this},transformMat4:function(t){var r=this.x,e=this.y,a=this.z,n=t.val;return this.x=n[0]*r+n[4]*e+n[8]*a+n[12],this.y=n[1]*r+n[5]*e+n[9]*a+n[13],this.z=n[2]*r+n[6]*e+n[10]*a+n[14],this},transformCoordinates:function(t){var r=this.x,e=this.y,a=this.z,n=t.val,i=r*n[0]+e*n[4]+a*n[8]+n[12],s=r*n[1]+e*n[5]+a*n[9]+n[13],h=r*n[2]+e*n[6]+a*n[10]+n[14],v=r*n[3]+e*n[7]+a*n[11]+n[15];return this.x=i/v,this.y=s/v,this.z=h/v,this},transformQuat:function(t){var r=this.x,e=this.y,a=this.z,n=t.x,i=t.y,s=t.z,h=t.w,v=h*r+i*a-s*e,o=h*e+s*r-n*a,f=h*a+n*e-i*r,y=-n*r-i*e-s*a;return this.x=v*h+y*-n+o*-s-f*-i,this.y=o*h+y*-i+f*-n-v*-s,this.z=f*h+y*-s+v*-i-o*-n,this},project:function(t){var r=this.x,e=this.y,a=this.z,n=t.val,i=n[0],s=n[1],h=n[2],v=n[3],o=n[4],f=n[5],y=n[6],u=n[7],c=n[8],x=n[9],l=n[10],d=n[11],M=n[12],w=n[13],m=n[14],_=n[15],g=1/(r*v+e*u+a*d+_);return this.x=(r*i+e*o+a*c+M)*g,this.y=(r*s+e*f+a*x+w)*g,this.z=(r*h+e*y+a*l+m)*g,this},projectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unprojectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unproject:function(t,r){var e=t.x,a=t.y,n=t.z,i=t.w,s=this.x-e,h=i-this.y-1-a,v=this.z;return this.x=2*s/n-1,this.y=2*h/i-1,this.z=2*v-1,this.project(r)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});V.ZERO=new V,V.RIGHT=new V(1,0,0),V.LEFT=new V(-1,0,0),V.UP=new V(0,-1,0),V.DOWN=new V(0,1,0),V.FORWARD=new V(0,0,1),V.BACK=new V(0,0,-1),V.ONE=new V(1,1,1);var at=V;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uv=at,Xv=function(t,r,e,a){e===void 0&&(e=!1);var n=t.x1,i=t.y1,s=t.x2,h=t.y2,v=r.x1,o=r.y1,f=r.x2,y=r.y2,u=s-n,c=h-i,x=f-v,l=y-o,d=u*l-c*x;if(d===0)return null;var M,w,m;if(e){if(M=(u*(o-i)+c*(n-v))/(x*c-l*u),w=(v+x*M-n)/u,w<0||M<0||M>1)return null;m=w}else{if(M=((v-n)*l-(o-i)*x)/d,w=((i-o)*u-(n-v)*c)/d,M<0||M>1||w<0||w>1)return null;m=M}return a===void 0&&(a=new Uv),a.set(n+u*m,i+c*m,m)},Ka=Xv;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zv=Ka,qv=ut,Ja=at,tn=new qv,dr=new Ja,Hv=function(t,r,e,a){e===void 0&&(e=!1),a===void 0&&(a=new Ja);var n=!1;a.set(),dr.set();for(var i=r[r.length-1],s=0;s<r.length;s++){var h=r[s];tn.setTo(i.x,i.y,h.x,h.y),i=h,Zv(t,tn,e,dr)&&(!n||dr.z<a.z)&&(a.copy(dr),n=!0)}return n?a:null},rn=Hv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wv=Y,Z=new Wv({initialize:function(r,e,a,n){this.x=0,this.y=0,this.z=0,this.w=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0,this.w=r.w||0):(this.x=r||0,this.y=e||0,this.z=a||0,this.w=n||0)},clone:function(){return new Z(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,r,e,a){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=r||0,this.z=e||0,this.w=a||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,r=this.y,e=this.z,a=this.w;return Math.sqrt(t*t+r*r+e*e+a*a)},lengthSq:function(){var t=this.x,r=this.y,e=this.z,a=this.w;return t*t+r*r+e*e+a*a},normalize:function(){var t=this.x,r=this.y,e=this.z,a=this.w,n=t*t+r*r+e*e+a*a;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=r*n,this.z=e*n,this.w=a*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var e=this.x,a=this.y,n=this.z,i=this.w;return this.x=e+r*(t.x-e),this.y=a+r*(t.y-a),this.z=n+r*(t.z-n),this.w=i+r*(t.w-i),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var r=t.x-this.x,e=t.y-this.y,a=t.z-this.z||0,n=t.w-this.w||0;return Math.sqrt(r*r+e*e+a*a+n*n)},distanceSq:function(t){var r=t.x-this.x,e=t.y-this.y,a=t.z-this.z||0,n=t.w-this.w||0;return r*r+e*e+a*a+n*n},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var r=this.x,e=this.y,a=this.z,n=this.w,i=t.val;return this.x=i[0]*r+i[4]*e+i[8]*a+i[12]*n,this.y=i[1]*r+i[5]*e+i[9]*a+i[13]*n,this.z=i[2]*r+i[6]*e+i[10]*a+i[14]*n,this.w=i[3]*r+i[7]*e+i[11]*a+i[15]*n,this},transformQuat:function(t){var r=this.x,e=this.y,a=this.z,n=t.x,i=t.y,s=t.z,h=t.w,v=h*r+i*a-s*e,o=h*e+s*r-n*a,f=h*a+n*e-i*r,y=-n*r-i*e-s*a;return this.x=v*h+y*-n+o*-s-f*-i,this.y=o*h+y*-i+f*-n-v*-s,this.z=f*h+y*-s+v*-i-o*-n,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});Z.prototype.sub=Z.prototype.subtract,Z.prototype.mul=Z.prototype.multiply,Z.prototype.div=Z.prototype.divide,Z.prototype.dist=Z.prototype.distance,Z.prototype.distSq=Z.prototype.distanceSq,Z.prototype.len=Z.prototype.length,Z.prototype.lenSq=Z.prototype.lengthSq;var ue=Z;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qv=at,jv=ue,Kv=rn,$t=new Qv,Jv=function(t,r,e,a){a===void 0&&(a=new jv),Array.isArray(r)||(r=[r]);var n=!1;a.set(),$t.set();for(var i=0;i<r.length;i++)Kv(t,r[i].points,e,$t)&&(!n||$t.z<a.z)&&(a.set($t.x,$t.y,$t.z,i),n=!0);return n?a:null},en=Jv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var to=function(t,r,e){var a=t.x1,n=t.y1,i=t.x2,s=t.y2,h=r.x1,v=r.y1,o=r.x2,f=r.y2;if(a===i&&n===s||h===o&&v===f)return!1;var y=(f-v)*(i-a)-(o-h)*(s-n);if(y===0)return!1;var u=((o-h)*(n-v)-(f-v)*(a-h))/y,c=((i-a)*(n-v)-(s-n)*(a-h))/y;return u<0||u>1||c<0||c>1?!1:(e&&(e.x=a+u*(i-a),e.y=n+u*(s-n)),!0)},Ct=to;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ro=function(t,r){var e=t.x1,a=t.y1,n=t.x2,i=t.y2,s=r.x,h=r.y,v=r.right,o=r.bottom,f=0;if(e>=s&&e<=v&&a>=h&&a<=o||n>=s&&n<=v&&i>=h&&i<=o)return!0;if(e<s&&n>=s){if(f=a+(i-a)*(s-e)/(n-e),f>h&&f<=o)return!0}else if(e>v&&n<=v&&(f=a+(i-a)*(v-e)/(n-e),f>=h&&f<=o))return!0;if(a<h&&i>=h){if(f=e+(n-e)*(h-a)/(i-a),f>=s&&f<=v)return!0}else if(a>o&&i<=o&&(f=e+(n-e)*(o-a)/(i-a),f>=s&&f<=v))return!0;return!1},an=ro;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mr=O,Mr=Ct,eo=an,ao=function(t,r,e){if(e===void 0&&(e=[]),eo(t,r))for(var a=r.getLineA(),n=r.getLineB(),i=r.getLineC(),s=r.getLineD(),h=[new mr,new mr,new mr,new mr],v=[Mr(a,t,h[0]),Mr(n,t,h[1]),Mr(i,t,h[2]),Mr(s,t,h[3])],o=0;o<4;o++)v[o]&&e.push(h[o]);return e},ye=ao;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var no=ue,io=en,so=ut,nn=new so;function ce(t,r,e,a,n){var i=Math.cos(t),s=Math.sin(t);nn.setTo(r,e,r+i,e+s);var h=io(nn,a,!0);h&&n.push(new no(h.x,h.y,t,h.w))}function ho(t,r){return t.z-r.z}var vo=function(t,r,e){Array.isArray(e)||(e=[e]);for(var a=[],n=[],i=0;i<e.length;i++)for(var s=e[i].points,h=0;h<s.length;h++){var v=Math.atan2(s[h].y-r,s[h].x-t);n.indexOf(v)===-1&&(ce(v,t,r,e,a),ce(v-1e-5,t,r,e,a),ce(v+1e-5,t,r,e,a),n.push(v))}return a.sort(ho)},oo=vo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fo=function(t,r){return t.width<=0||t.height<=0||r.width<=0||r.height<=0?!1:!(t.right<r.x||t.bottom<r.y||t.x>r.right||t.y>r.bottom)},wr=fo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uo=J,yo=wr,co=function(t,r,e){return e===void 0&&(e=new uo),yo(t,r)&&(e.x=Math.max(t.x,r.x),e.y=Math.max(t.y,r.y),e.width=Math.min(t.right,r.right)-e.x,e.height=Math.min(t.bottom,r.bottom)-e.y),e},xo=co;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _r=ye,lo=wr,mo=function(t,r,e){if(e===void 0&&(e=[]),lo(t,r)){var a=t.getLineA(),n=t.getLineB(),i=t.getLineC(),s=t.getLineD();_r(a,r,e),_r(n,r,e),_r(i,r,e),_r(s,r,e)}return e},Mo=mo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wo=function(t,r,e,a){e===void 0&&(e=!1),a===void 0&&(a=[]);for(var n=t.x3-t.x1,i=t.y3-t.y1,s=t.x2-t.x1,h=t.y2-t.y1,v=n*n+i*i,o=n*s+i*h,f=s*s+h*h,y=v*f-o*o,u=y===0?0:1/y,c,x,l,d,M,w,m=t.x1,_=t.y1,g=0;g<r.length&&(l=r[g].x-m,d=r[g].y-_,M=n*l+i*d,w=s*l+h*d,c=(f*M-o*w)*u,x=(v*w-o*M)*u,!(c>=0&&x>=0&&c+x<1&&(a.push({x:r[g].x,y:r[g].y}),e)));g++);return a},xe=wo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _o=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x,y:t.y}),r.push({x:t.right,y:t.y}),r.push({x:t.right,y:t.bottom}),r.push({x:t.x,y:t.bottom}),r},sn=_o;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tt=Ct,Tt=fr,go=xe,bo=sn,$o=function(t,r){if(r.left>t.right||r.right<t.left||r.top>t.bottom||r.bottom<t.top)return!1;var e=r.getLineA(),a=r.getLineB(),n=r.getLineC();if(Tt(t,e.x1,e.y1)||Tt(t,e.x2,e.y2)||Tt(t,a.x1,a.y1)||Tt(t,a.x2,a.y2)||Tt(t,n.x1,n.y1)||Tt(t,n.x2,n.y2))return!0;var i=t.getLineA(),s=t.getLineB(),h=t.getLineC(),v=t.getLineD();if(tt(e,i)||tt(e,s)||tt(e,h)||tt(e,v)||tt(a,i)||tt(a,s)||tt(a,h)||tt(a,v)||tt(n,i)||tt(n,s)||tt(n,h)||tt(n,v))return!0;var o=bo(t),f=go(r,o,!0);return f.length>0},hn=$o;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Co=hn,le=ye,To=function(t,r,e){if(e===void 0&&(e=[]),Co(t,r)){var a=r.getLineA(),n=r.getLineB(),i=r.getLineC();le(a,t,e),le(n,t,e),le(i,t,e)}return e},Po=To;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zo=function(t,r,e){var a=t.x3-t.x1,n=t.y3-t.y1,i=t.x2-t.x1,s=t.y2-t.y1,h=r-t.x1,v=e-t.y1,o=a*a+n*n,f=a*i+n*s,y=a*h+n*v,u=i*i+s*s,c=i*h+s*v,x=o*u-f*f,l=x===0?0:1/x,d=(u*y-f*c)*l,M=(o*c-f*y)*l;return d>=0&&M>=0&&d+M<1},gr=zo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var de=ve,po=gr,Oo=function(t,r){return t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top?!1:!!(po(t,r.x,r.y)||de(t.getLineA(),r)||de(t.getLineB(),r)||de(t.getLineC(),r))},vn=Oo;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var me=fe,Io=vn,Eo=function(t,r,e){if(e===void 0&&(e=[]),Io(t,r)){var a=t.getLineA(),n=t.getLineB(),i=t.getLineC();me(a,r,e),me(n,r,e),me(i,r,e)}return e},So=Eo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Me=Ct,Ao=function(t,r){return!!(t.contains(r.x1,r.y1)||t.contains(r.x2,r.y2)||Me(t.getLineA(),r)||Me(t.getLineB(),r)||Me(t.getLineC(),r))},on=Ao;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var we=O,Ro=on,_e=Ct,Lo=function(t,r,e){if(e===void 0&&(e=[]),Ro(t,r))for(var a=t.getLineA(),n=t.getLineB(),i=t.getLineC(),s=[new we,new we,new we],h=[_e(a,r,s[0]),_e(n,r,s[1]),_e(i,r,s[2])],v=0;v<3;v++)h[v]&&e.push(s[v]);return e},fn=Lo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Go=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x1,y:t.y1}),r.push({x:t.x2,y:t.y2}),r.push({x:t.x3,y:t.y3}),r},un=Go;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yn=xe,cn=un,it=Ct,Bo=function(t,r){if(t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top)return!1;var e=t.getLineA(),a=t.getLineB(),n=t.getLineC(),i=r.getLineA(),s=r.getLineB(),h=r.getLineC();if(it(e,i)||it(e,s)||it(e,h)||it(a,i)||it(a,s)||it(a,h)||it(n,i)||it(n,s)||it(n,h))return!0;var v=cn(t),o=yn(r,v,!0);return o.length>0||(v=cn(r),o=yn(t,v,!0),o.length>0)},xn=Bo;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fo=xn,ge=fn,No=function(t,r,e){if(e===void 0&&(e=[]),Fo(t,r)){var a=r.getLineA(),n=r.getLineB(),i=r.getLineC();ge(t,a,e),ge(t,n,e),ge(t,i,e)}return e},ko=No;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Do=function(t,r,e){e===void 0&&(e=1);var a=r.x1,n=r.y1,i=r.x2,s=r.y2,h=t.x,v=t.y,o=(i-a)*(i-a)+(s-n)*(s-n);if(o===0)return!1;var f=((h-a)*(i-a)+(v-n)*(s-n))/o;if(f<0)return Math.sqrt((a-h)*(a-h)+(n-v)*(n-v))<=e;if(f>=0&&f<=1){var y=((n-v)*(i-a)-(a-h)*(s-n))/o;return Math.abs(y)*Math.sqrt(o)<=e}else return Math.sqrt((i-h)*(i-h)+(s-v)*(s-v))<=e},ln=Do;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vo=ln,Yo=function(t,r){if(!Vo(t,r))return!1;var e=Math.min(r.x1,r.x2),a=Math.max(r.x1,r.x2),n=Math.min(r.y1,r.y2),i=Math.max(r.y1,r.y2);return t.x>=e&&t.x<=a&&t.y>=n&&t.y<=i},Uo=Yo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xo=function(t,r,e,a,n,i){return i===void 0&&(i=0),!(r>t.right+i||e<t.left-i||a>t.bottom+i||n<t.top-i)},Zo=Xo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qo={CircleToCircle:Qa,CircleToRectangle:ja,GetCircleToCircle:Rv,GetCircleToRectangle:Vv,GetLineToCircle:fe,GetLineToLine:Ka,GetLineToPoints:rn,GetLineToPolygon:en,GetLineToRectangle:ye,GetRaysFromPointToPolygon:oo,GetRectangleIntersection:xo,GetRectangleToRectangle:Mo,GetRectangleToTriangle:Po,GetTriangleToCircle:So,GetTriangleToLine:fn,GetTriangleToTriangle:ko,LineToCircle:ve,LineToLine:Ct,LineToRectangle:an,PointToLine:ln,PointToLineSegment:Uo,RectangleToRectangle:wr,RectangleToTriangle:hn,RectangleToValues:Zo,TriangleToCircle:vn,TriangleToLine:on,TriangleToTriangle:xn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ho=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)},Pt=Ho;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wo=function(t,r,e){r===void 0&&(r=1),e===void 0&&(e=[]);var a=Math.round(t.x1),n=Math.round(t.y1),i=Math.round(t.x2),s=Math.round(t.y2),h=Math.abs(i-a),v=Math.abs(s-n),o=a<i?1:-1,f=n<s?1:-1,y=h-v;e.push({x:a,y:n});for(var u=1;!(a===i&&n===s);){var c=y<<1;c>-v&&(y-=v,a+=o),c<h&&(y+=h,n+=f),u%r===0&&e.push({x:a,y:n}),u++}return e},Qo=Wo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jo=function(t,r,e){var a=r-(t.x1+t.x2)/2,n=e-(t.y1+t.y2)/2;return t.x1+=a,t.y1+=n,t.x2+=a,t.y2+=n,t},Ko=jo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jo=ut,tf=function(t){return new Jo(t.x1,t.y1,t.x2,t.y2)},rf=tf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ef=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2)},af=ef;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nf=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2},sf=nf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hf=ft,vf=function(t,r,e){e===void 0&&(e=r);var a=hf(t),n=t.x2-t.x1,i=t.y2-t.y1;return r&&(t.x1=t.x1-n/a*r,t.y1=t.y1-i/a*r),e&&(t.x2=t.x2+n/a*e,t.y2=t.y2+i/a*e),t},of=vf;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ff=function(t,r){var e=t.x-r.x,a=t.y-r.y;return Math.sqrt(e*e+a*a)},dn=ff;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uf=function(t,r){return r===void 0&&(r=1.70158),t*t*((r+1)*t-r)},yf=uf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cf=function(t,r){return r===void 0&&(r=1.70158),--t*t*((r+1)*t+r)+1},xf=cf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lf=function(t,r){r===void 0&&(r=1.70158);var e=r*1.525;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)},df=lf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mn={In:yf,Out:xf,InOut:df};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mf=function(t){return t=1-t,t<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)},Mf=mf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wf=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},_f=wf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gf=function(t){var r=!1;return t<.5?(t=1-t*2,r=!0):t=t*2-1,t<1/2.75?t=7.5625*t*t:t<2/2.75?t=7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?t=7.5625*(t-=2.25/2.75)*t+.9375:t=7.5625*(t-=2.625/2.75)*t+.984375,r?(1-t)*.5:t*.5+.5},bf=gf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mn={In:Mf,Out:_f,InOut:bf};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $f=function(t){return 1-Math.sqrt(1-t*t)},Cf=$f;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tf=function(t){return Math.sqrt(1- --t*t)},Pf=Tf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zf=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},pf=zf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wn={In:Cf,Out:Pf,InOut:pf};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Of=function(t){return t*t*t},If=Of;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ef=function(t){return--t*t*t+1},Sf=Ef;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Af=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},Rf=Af;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _n={In:If,Out:Sf,InOut:Rf};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lf=function(t,r,e){if(r===void 0&&(r=.1),e===void 0&&(e=.1),t===0)return 0;if(t===1)return 1;var a=e/4;return r<1?r=1:a=e*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(t-=1))*Math.sin((t-a)*(2*Math.PI)/e))},Gf=Lf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bf=function(t,r,e){if(r===void 0&&(r=.1),e===void 0&&(e=.1),t===0)return 0;if(t===1)return 1;var a=e/4;return r<1?r=1:a=e*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-a)*(2*Math.PI)/e)+1},Ff=Bf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nf=function(t,r,e){if(r===void 0&&(r=.1),e===void 0&&(e=.1),t===0)return 0;if(t===1)return 1;var a=e/4;return r<1?r=1:a=e*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((t-a)*(2*Math.PI)/e)):r*Math.pow(2,-10*(t-=1))*Math.sin((t-a)*(2*Math.PI)/e)*.5+1},kf=Nf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gn={In:Gf,Out:Ff,InOut:kf};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Df=function(t){return Math.pow(2,10*(t-1))-.001},Vf=Df;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yf=function(t){return 1-Math.pow(2,-10*t)},Uf=Yf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xf=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))},Zf=Xf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bn={In:Vf,Out:Uf,InOut:Zf};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qf=function(t){return t},Hf=qf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $n=Hf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wf=function(t){return t*t},Qf=Wf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jf=function(t){return t*(2-t)},Kf=jf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jf=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},tu=Jf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cn={In:Qf,Out:Kf,InOut:tu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ru=function(t){return t*t*t*t},eu=ru;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var au=function(t){return 1- --t*t*t*t},nu=au;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var iu=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},su=iu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tn={In:eu,Out:nu,InOut:su};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hu=function(t){return t*t*t*t*t},vu=hu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ou=function(t){return--t*t*t*t*t+1},fu=ou;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uu=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},yu=uu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pn={In:vu,Out:fu,InOut:yu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cu=function(t){return t===0?0:t===1?1:1-Math.cos(t*Math.PI/2)},xu=cu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lu=function(t){return t===0?0:t===1?1:Math.sin(t*Math.PI/2)},du=lu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mu=function(t){return t===0?0:t===1?1:.5*(1-Math.cos(Math.PI*t))},Mu=mu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zn={In:xu,Out:du,InOut:Mu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wu=function(t,r){return r===void 0&&(r=1),t<=0?0:t>=1?1:((r*t|0)+1)*(1/r)},_u=wu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pn=_u;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var br=mn,$r=Mn,Cr=wn,Vt=_n,Tr=gn,Pr=bn,On=$n,Yt=Cn,Ut=Tn,Xt=Pn,zr=zn,gu=pn,bu={Power0:On,Power1:Yt.Out,Power2:Vt.Out,Power3:Ut.Out,Power4:Xt.Out,Linear:On,Quad:Yt.Out,Cubic:Vt.Out,Quart:Ut.Out,Quint:Xt.Out,Sine:zr.Out,Expo:Pr.Out,Circ:Cr.Out,Elastic:Tr.Out,Back:br.Out,Bounce:$r.Out,Stepped:gu,"Quad.easeIn":Yt.In,"Cubic.easeIn":Vt.In,"Quart.easeIn":Ut.In,"Quint.easeIn":Xt.In,"Sine.easeIn":zr.In,"Expo.easeIn":Pr.In,"Circ.easeIn":Cr.In,"Elastic.easeIn":Tr.In,"Back.easeIn":br.In,"Bounce.easeIn":$r.In,"Quad.easeOut":Yt.Out,"Cubic.easeOut":Vt.Out,"Quart.easeOut":Ut.Out,"Quint.easeOut":Xt.Out,"Sine.easeOut":zr.Out,"Expo.easeOut":Pr.Out,"Circ.easeOut":Cr.Out,"Elastic.easeOut":Tr.Out,"Back.easeOut":br.Out,"Bounce.easeOut":$r.Out,"Quad.easeInOut":Yt.InOut,"Cubic.easeInOut":Vt.InOut,"Quart.easeInOut":Ut.InOut,"Quint.easeInOut":Xt.InOut,"Sine.easeInOut":zr.InOut,"Expo.easeInOut":Pr.InOut,"Circ.easeInOut":Cr.InOut,"Elastic.easeInOut":Tr.InOut,"Back.easeInOut":br.InOut,"Bounce.easeInOut":$r.InOut};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $u=function(t){return t&&t[0].toUpperCase()+t.slice(1)},Cu=$u;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zt=bu,Tu=Cu,Pu=function(t,r){var e=Zt.Power0;if(typeof t=="string")if(Zt.hasOwnProperty(t))e=Zt[t];else{var a="";if(t.indexOf(".")){a=t.substring(t.indexOf(".")+1);var n=a.toLowerCase();n==="in"?a="easeIn":n==="out"?a="easeOut":n==="inout"&&(a="easeInOut")}t=Tu(t.substring(0,t.indexOf(".")+1)+a),Zt.hasOwnProperty(t)&&(e=Zt[t])}else typeof t=="function"&&(e=t);if(!r)return e;var i=r.slice(0);return i.unshift(0),function(s){return i[0]=s,e.apply(this,i)}},zu=Pu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var In=dn,pu=zu,En=O,Ou=function(t,r,e,a,n){a===void 0&&(a=0),n===void 0&&(n=[]);var i=[],s=t.x1,h=t.y1,v=t.x2-s,o=t.y2-h,f=pu(r,n),y,u,c=e-1;for(y=0;y<c;y++)u=f(y/c),i.push(new En(s+v*u,h+o*u));if(u=f(1),i.push(new En(s+v*u,h+o*u)),a>0){var x=i[0],l=[x];for(y=1;y<i.length-1;y++){var d=i[y];In(x,d)>=a&&(l.push(d),x=d)}var M=i[i.length-1];return In(x,M)<a&&l.pop(),l.push(M),l}else return i},Iu=Ou;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Eu=O,Su=function(t,r){return r===void 0&&(r=new Eu),r.x=(t.x1+t.x2)/2,r.y=(t.y1+t.y2)/2,r},Au=Su;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ru=O,Lu=function(t,r,e){e===void 0&&(e=new Ru);var a=t.x1,n=t.y1,i=t.x2,s=t.y2,h=(i-a)*(i-a)+(s-n)*(s-n);if(h===0)return e;var v=((r.x-a)*(i-a)+(r.y-n)*(s-n))/h;return e.x=a+v*(i-a),e.y=n+v*(s-n),e},Gu=Lu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bu=W,Fu=Pt,Nu=O,ku=function(t,r){r===void 0&&(r=new Nu);var e=Fu(t)-Bu.TAU;return r.x=Math.cos(e),r.y=Math.sin(e),r},Du=ku;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vu=function(t,r){var e=t.x1,a=t.y1,n=t.x2,i=t.y2,s=(n-e)*(n-e)+(i-a)*(i-a);if(s===0)return!1;var h=((a-r.y)*(n-e)-(e-r.x)*(i-a))/s;return Math.abs(h)*Math.sqrt(s)},Yu=Vu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uu=function(t){return Math.abs(t.y1-t.y2)},Xu=Uu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zu=function(t,r,e){var a=e-r;return r+((t-r)%a+a)%a},pr=Zu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qu=W,Hu=pr,Wu=Pt,Qu=function(t){var r=Wu(t)-qu.TAU;return Hu(r,-Math.PI,Math.PI)},Sn=Qu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ju=W,Ku=Pt,Ju=function(t){return Math.cos(Ku(t)-ju.TAU)},t1=Ju;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var r1=W,e1=Pt,a1=function(t){return Math.sin(e1(t)-r1.TAU)},n1=a1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var i1=function(t,r,e){return t.x1+=r,t.y1+=e,t.x2+=r,t.y2+=e,t},s1=i1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var h1=function(t){return-((t.x2-t.x1)/(t.y2-t.y1))},v1=h1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var o1=Pt,f1=Sn,u1=function(t,r){return 2*f1(r)-Math.PI-o1(t)},y1=u1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var c1=function(t,r,e,a){var n=Math.cos(a),i=Math.sin(a),s=t.x1-r,h=t.y1-e;return t.x1=s*n-h*i+r,t.y1=s*i+h*n+e,s=t.x2-r,h=t.y2-e,t.x2=s*n-h*i+r,t.y2=s*i+h*n+e,t},be=c1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x1=be,l1=function(t,r){var e=(t.x1+t.x2)/2,a=(t.y1+t.y2)/2;return x1(t,e,a,r)},d1=l1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var m1=be,M1=function(t,r,e){return m1(t,r.x,r.y,e)},w1=M1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _1=function(t,r,e,a,n){return t.x1=r,t.y1=e,t.x2=r+Math.cos(a)*n,t.y2=e+Math.sin(a)*n,t},g1=_1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var b1=function(t){return(t.y2-t.y1)/(t.x2-t.x1)},$1=b1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var C1=function(t){return Math.abs(t.x1-t.x2)},T1=C1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R=ut;R.Angle=Pt,R.BresenhamPoints=Qo,R.CenterOn=Ko,R.Clone=rf,R.CopyFrom=af,R.Equals=sf,R.Extend=of,R.GetEasedPoints=Iu,R.GetMidPoint=Au,R.GetNearestPoint=Gu,R.GetNormal=Du,R.GetPoint=Ba,R.GetPoints=Fa,R.GetShortestDistance=Yu,R.Height=Xu,R.Length=ft,R.NormalAngle=Sn,R.NormalX=t1,R.NormalY=n1,R.Offset=s1,R.PerpSlope=v1,R.Random=Na,R.ReflectAngle=y1,R.Rotate=d1,R.RotateAroundPoint=w1,R.RotateAroundXY=be,R.SetToAngle=g1,R.Slope=$1,R.Width=T1;var P1=R;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var z1=Y,p1=J,O1=gt;function $e(t,r,e,a){var n=t-e,i=r-a,s=n*n+i*i;return Math.sqrt(s)}var I1=new z1({initialize:function(r,e,a){this.vertex1=r,this.vertex2=e,this.vertex3=a,this.bounds=new p1,this._inCenter=new O1},getInCenter:function(t){t===void 0&&(t=!0);var r=this.vertex1,e=this.vertex2,a=this.vertex3,n,i,s,h,v,o;t?(n=r.x,i=r.y,s=e.x,h=e.y,v=a.x,o=a.y):(n=r.vx,i=r.vy,s=e.vx,h=e.vy,v=a.vx,o=a.vy);var f=$e(v,o,s,h),y=$e(n,i,v,o),u=$e(s,h,n,i),c=f+y+u;return this._inCenter.set((n*f+s*y+v*u)/c,(i*f+h*y+o*u)/c)},contains:function(t,r,e){var a=this.vertex1,n=this.vertex2,i=this.vertex3,s=a.vx,h=a.vy,v=n.vx,o=n.vy,f=i.vx,y=i.vy;if(e){var u=e.a,c=e.b,x=e.c,l=e.d,d=e.e,M=e.f;s=a.vx*u+a.vy*x+d,h=a.vx*c+a.vy*l+M,v=n.vx*u+n.vy*x+d,o=n.vx*c+n.vy*l+M,f=i.vx*u+i.vy*x+d,y=i.vx*c+i.vy*l+M}var w=f-s,m=y-h,_=v-s,g=o-h,b=t-s,I=r-h,S=w*w+m*m,P=w*_+m*g,z=w*b+m*I,T=_*_+g*g,E=_*b+g*I,$=S*T-P*P,L=$===0?0:1/$,C=(T*z-P*E)*L,A=(S*E-P*z)*L;return C>=0&&A>=0&&C+A<1},isCounterClockwise:function(t){var r=this.vertex1,e=this.vertex2,a=this.vertex3,n=(e.vx-r.vx)*(a.vy-r.vy)-(e.vy-r.vy)*(a.vx-r.vx);return t<=0?n>=0:n<0},load:function(t,r,e,a,n){return e=this.vertex1.load(t,r,e,a,n),e=this.vertex2.load(t,r,e,a,n),e=this.vertex3.load(t,r,e,a,n),e},transformCoordinatesLocal:function(t,r,e,a){return this.vertex1.transformCoordinatesLocal(t,r,e,a),this.vertex2.transformCoordinatesLocal(t,r,e,a),this.vertex3.transformCoordinatesLocal(t,r,e,a),this},updateBounds:function(){var t=this.vertex1,r=this.vertex2,e=this.vertex3,a=this.bounds;return a.x=Math.min(t.vx,r.vx,e.vx),a.y=Math.min(t.vy,r.vy,e.vy),a.width=Math.max(t.vx,r.vx,e.vx)-a.x,a.height=Math.max(t.vy,r.vy,e.vy)-a.y,this},isInView:function(t,r,e,a,n,i,s,h,v,o,f){this.update(a,n,i,s,h,v,o,f);var y=this.vertex1,u=this.vertex2,c=this.vertex3;if(y.ta<=0&&u.ta<=0&&c.ta<=0||r&&!this.isCounterClockwise(e))return!1;var x=this.bounds;x.x=Math.min(y.tx,u.tx,c.tx),x.y=Math.min(y.ty,u.ty,c.ty),x.width=Math.max(y.tx,u.tx,c.tx)-x.x,x.height=Math.max(y.ty,u.ty,c.ty)-x.y;var l=t.x+t.width,d=t.y+t.height;return x.width<=0||x.height<=0||t.width<=0||t.height<=0?!1:!(x.right<t.x||x.bottom<t.y||x.x>l||x.y>d)},scrollUV:function(t,r){return this.vertex1.scrollUV(t,r),this.vertex2.scrollUV(t,r),this.vertex3.scrollUV(t,r),this},scaleUV:function(t,r){return this.vertex1.scaleUV(t,r),this.vertex2.scaleUV(t,r),this.vertex3.scaleUV(t,r),this},setColor:function(t){return this.vertex1.color=t,this.vertex2.color=t,this.vertex3.color=t,this},update:function(t,r,e,a,n,i,s,h){return this.vertex1.update(r,e,a,n,i,s,h,t),this.vertex2.update(r,e,a,n,i,s,h,t),this.vertex3.update(r,e,a,n,i,s,h,t),this},translate:function(t,r){r===void 0&&(r=0);var e=this.vertex1,a=this.vertex2,n=this.vertex3;return e.x+=t,e.y+=r,a.x+=t,a.y+=r,n.x+=t,n.y+=r,this},x:{get:function(){return this.getInCenter().x},set:function(t){var r=this.getInCenter();this.translate(t-r.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(t){var r=this.getInCenter();this.translate(0,t-r.y)}},alpha:{get:function(){var t=this.vertex1,r=this.vertex2,e=this.vertex3;return(t.alpha+r.alpha+e.alpha)/3},set:function(t){this.vertex1.alpha=t,this.vertex2.alpha=t,this.vertex3.alpha=t}},depth:{get:function(){var t=this.vertex1,r=this.vertex2,e=this.vertex3;return(t.vz+r.vz+e.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}}),Or=I1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var E1=function(t,r,e){var a=typeof t;return!t||a==="number"||a==="string"?e:t.hasOwnProperty(r)&&t[r]!==void 0?t[r]:e},S1=E1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var A1=Y,Ce=at,Ir=1e-6,Er=new A1({initialize:function(r){this.val=new Float32Array(16),r?this.copy(r):this.identity()},clone:function(){return new Er(this)},set:function(t){return this.copy(t)},setValues:function(t,r,e,a,n,i,s,h,v,o,f,y,u,c,x,l){var d=this.val;return d[0]=t,d[1]=r,d[2]=e,d[3]=a,d[4]=n,d[5]=i,d[6]=s,d[7]=h,d[8]=v,d[9]=o,d[10]=f,d[11]=y,d[12]=u,d[13]=c,d[14]=x,d[15]=l,this},copy:function(t){var r=t.val;return this.setValues(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,r,e){var a=zt.fromQuat(e),n=a.val,i=r.x,s=r.y,h=r.z;return this.setValues(n[0]*i,n[1]*i,n[2]*i,0,n[4]*s,n[5]*s,n[6]*s,0,n[8]*h,n[9]*h,n[10]*h,0,t.x,t.y,t.z,1)},xyz:function(t,r,e){this.identity();var a=this.val;return a[12]=t,a[13]=r,a[14]=e,this},scaling:function(t,r,e){this.zero();var a=this.val;return a[0]=t,a[5]=r,a[10]=e,a[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,r=t[1],e=t[2],a=t[3],n=t[6],i=t[7],s=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=r,t[6]=t[9],t[7]=t[13],t[8]=e,t[9]=n,t[11]=t[14],t[12]=a,t[13]=i,t[14]=s,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8],f=t[9],y=t[10],u=t[11],c=t[12],x=t[13],l=t[14],d=t[15],M=r*s-e*i,w=r*h-a*i,m=r*v-n*i,_=e*h-a*s,g=e*v-n*s,b=a*v-n*h,I=o*x-f*c,S=o*l-y*c,P=o*d-u*c,z=f*l-y*x,T=f*d-u*x,E=y*d-u*l,$=M*E-w*T+m*z+_*P-g*S+b*I;return $?($=1/$,this.setValues((s*E-h*T+v*z)*$,(a*T-e*E-n*z)*$,(x*b-l*g+d*_)*$,(y*g-f*b-u*_)*$,(h*P-i*E-v*S)*$,(r*E-a*P+n*S)*$,(l*m-c*b-d*w)*$,(o*b-y*m+u*w)*$,(i*T-s*P+v*I)*$,(e*P-r*T-n*I)*$,(c*g-x*m+d*M)*$,(f*m-o*g-u*M)*$,(s*S-i*z-h*I)*$,(r*z-e*S+a*I)*$,(x*w-c*_-l*M)*$,(o*_-f*w+y*M)*$)):this},adjoint:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8],f=t[9],y=t[10],u=t[11],c=t[12],x=t[13],l=t[14],d=t[15];return this.setValues(s*(y*d-u*l)-f*(h*d-v*l)+x*(h*u-v*y),-(e*(y*d-u*l)-f*(a*d-n*l)+x*(a*u-n*y)),e*(h*d-v*l)-s*(a*d-n*l)+x*(a*v-n*h),-(e*(h*u-v*y)-s*(a*u-n*y)+f*(a*v-n*h)),-(i*(y*d-u*l)-o*(h*d-v*l)+c*(h*u-v*y)),r*(y*d-u*l)-o*(a*d-n*l)+c*(a*u-n*y),-(r*(h*d-v*l)-i*(a*d-n*l)+c*(a*v-n*h)),r*(h*u-v*y)-i*(a*u-n*y)+o*(a*v-n*h),i*(f*d-u*x)-o*(s*d-v*x)+c*(s*u-v*f),-(r*(f*d-u*x)-o*(e*d-n*x)+c*(e*u-n*f)),r*(s*d-v*x)-i*(e*d-n*x)+c*(e*v-n*s),-(r*(s*u-v*f)-i*(e*u-n*f)+o*(e*v-n*s)),-(i*(f*l-y*x)-o*(s*l-h*x)+c*(s*y-h*f)),r*(f*l-y*x)-o*(e*l-a*x)+c*(e*y-a*f),-(r*(s*l-h*x)-i*(e*l-a*x)+c*(e*h-a*s)),r*(s*y-h*f)-i*(e*y-a*f)+o*(e*h-a*s))},determinant:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8],f=t[9],y=t[10],u=t[11],c=t[12],x=t[13],l=t[14],d=t[15],M=r*s-e*i,w=r*h-a*i,m=r*v-n*i,_=e*h-a*s,g=e*v-n*s,b=a*v-n*h,I=o*x-f*c,S=o*l-y*c,P=o*d-u*c,z=f*l-y*x,T=f*d-u*x,E=y*d-u*l;return M*E-w*T+m*z+_*P-g*S+b*I},multiply:function(t){var r=this.val,e=r[0],a=r[1],n=r[2],i=r[3],s=r[4],h=r[5],v=r[6],o=r[7],f=r[8],y=r[9],u=r[10],c=r[11],x=r[12],l=r[13],d=r[14],M=r[15],w=t.val,m=w[0],_=w[1],g=w[2],b=w[3];return r[0]=m*e+_*s+g*f+b*x,r[1]=m*a+_*h+g*y+b*l,r[2]=m*n+_*v+g*u+b*d,r[3]=m*i+_*o+g*c+b*M,m=w[4],_=w[5],g=w[6],b=w[7],r[4]=m*e+_*s+g*f+b*x,r[5]=m*a+_*h+g*y+b*l,r[6]=m*n+_*v+g*u+b*d,r[7]=m*i+_*o+g*c+b*M,m=w[8],_=w[9],g=w[10],b=w[11],r[8]=m*e+_*s+g*f+b*x,r[9]=m*a+_*h+g*y+b*l,r[10]=m*n+_*v+g*u+b*d,r[11]=m*i+_*o+g*c+b*M,m=w[12],_=w[13],g=w[14],b=w[15],r[12]=m*e+_*s+g*f+b*x,r[13]=m*a+_*h+g*y+b*l,r[14]=m*n+_*v+g*u+b*d,r[15]=m*i+_*o+g*c+b*M,this},multiplyLocal:function(t){var r=this.val,e=t.val;return this.setValues(r[0]*e[0]+r[1]*e[4]+r[2]*e[8]+r[3]*e[12],r[0]*e[1]+r[1]*e[5]+r[2]*e[9]+r[3]*e[13],r[0]*e[2]+r[1]*e[6]+r[2]*e[10]+r[3]*e[14],r[0]*e[3]+r[1]*e[7]+r[2]*e[11]+r[3]*e[15],r[4]*e[0]+r[5]*e[4]+r[6]*e[8]+r[7]*e[12],r[4]*e[1]+r[5]*e[5]+r[6]*e[9]+r[7]*e[13],r[4]*e[2]+r[5]*e[6]+r[6]*e[10]+r[7]*e[14],r[4]*e[3]+r[5]*e[7]+r[6]*e[11]+r[7]*e[15],r[8]*e[0]+r[9]*e[4]+r[10]*e[8]+r[11]*e[12],r[8]*e[1]+r[9]*e[5]+r[10]*e[9]+r[11]*e[13],r[8]*e[2]+r[9]*e[6]+r[10]*e[10]+r[11]*e[14],r[8]*e[3]+r[9]*e[7]+r[10]*e[11]+r[11]*e[15],r[12]*e[0]+r[13]*e[4]+r[14]*e[8]+r[15]*e[12],r[12]*e[1]+r[13]*e[5]+r[14]*e[9]+r[15]*e[13],r[12]*e[2]+r[13]*e[6]+r[14]*e[10]+r[15]*e[14],r[12]*e[3]+r[13]*e[7]+r[14]*e[11]+r[15]*e[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,r){var e=t.val,a=r.val,n=e[0],i=e[4],s=e[8],h=e[12],v=e[1],o=e[5],f=e[9],y=e[13],u=e[2],c=e[6],x=e[10],l=e[14],d=e[3],M=e[7],w=e[11],m=e[15],_=a[0],g=a[4],b=a[8],I=a[12],S=a[1],P=a[5],z=a[9],T=a[13],E=a[2],$=a[6],L=a[10],C=a[14],A=a[3],G=a[7],B=a[11],H=a[15];return this.setValues(n*_+i*S+s*E+h*A,v*_+o*S+f*E+y*A,u*_+c*S+x*E+l*A,d*_+M*S+w*E+m*A,n*g+i*P+s*$+h*G,v*g+o*P+f*$+y*G,u*g+c*P+x*$+l*G,d*g+M*P+w*$+m*G,n*b+i*z+s*L+h*B,v*b+o*z+f*L+y*B,u*b+c*z+x*L+l*B,d*b+M*z+w*L+m*B,n*I+i*T+s*C+h*H,v*I+o*T+f*C+y*H,u*I+c*T+x*C+l*H,d*I+M*T+w*C+m*H)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,r,e){var a=this.val;return a[12]=a[0]*t+a[4]*r+a[8]*e+a[12],a[13]=a[1]*t+a[5]*r+a[9]*e+a[13],a[14]=a[2]*t+a[6]*r+a[10]*e+a[14],a[15]=a[3]*t+a[7]*r+a[11]*e+a[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,r,e){var a=this.val;return a[0]=a[0]*t,a[1]=a[1]*t,a[2]=a[2]*t,a[3]=a[3]*t,a[4]=a[4]*r,a[5]=a[5]*r,a[6]=a[6]*r,a[7]=a[7]*r,a[8]=a[8]*e,a[9]=a[9]*e,a[10]=a[10]*e,a[11]=a[11]*e,this},makeRotationAxis:function(t,r){var e=Math.cos(r),a=Math.sin(r),n=1-e,i=t.x,s=t.y,h=t.z,v=n*i,o=n*s;return this.setValues(v*i+e,v*s-a*h,v*h+a*s,0,v*s+a*h,o*s+e,o*h-a*i,0,v*h-a*s,o*h+a*i,n*h*h+e,0,0,0,0,1)},rotate:function(t,r){var e=this.val,a=r.x,n=r.y,i=r.z,s=Math.sqrt(a*a+n*n+i*i);if(Math.abs(s)<Ir)return this;s=1/s,a*=s,n*=s,i*=s;var h=Math.sin(t),v=Math.cos(t),o=1-v,f=e[0],y=e[1],u=e[2],c=e[3],x=e[4],l=e[5],d=e[6],M=e[7],w=e[8],m=e[9],_=e[10],g=e[11],b=e[12],I=e[13],S=e[14],P=e[15],z=a*a*o+v,T=n*a*o+i*h,E=i*a*o-n*h,$=a*n*o-i*h,L=n*n*o+v,C=i*n*o+a*h,A=a*i*o+n*h,G=n*i*o-a*h,B=i*i*o+v;return this.setValues(f*z+x*T+w*E,y*z+l*T+m*E,u*z+d*T+_*E,c*z+M*T+g*E,f*$+x*L+w*C,y*$+l*L+m*C,u*$+d*L+_*C,c*$+M*L+g*C,f*A+x*G+w*B,y*A+l*G+m*B,u*A+d*G+_*B,c*A+M*G+g*B,b,I,S,P)},rotateX:function(t){var r=this.val,e=Math.sin(t),a=Math.cos(t),n=r[4],i=r[5],s=r[6],h=r[7],v=r[8],o=r[9],f=r[10],y=r[11];return r[4]=n*a+v*e,r[5]=i*a+o*e,r[6]=s*a+f*e,r[7]=h*a+y*e,r[8]=v*a-n*e,r[9]=o*a-i*e,r[10]=f*a-s*e,r[11]=y*a-h*e,this},rotateY:function(t){var r=this.val,e=Math.sin(t),a=Math.cos(t),n=r[0],i=r[1],s=r[2],h=r[3],v=r[8],o=r[9],f=r[10],y=r[11];return r[0]=n*a-v*e,r[1]=i*a-o*e,r[2]=s*a-f*e,r[3]=h*a-y*e,r[8]=n*e+v*a,r[9]=i*e+o*a,r[10]=s*e+f*a,r[11]=h*e+y*a,this},rotateZ:function(t){var r=this.val,e=Math.sin(t),a=Math.cos(t),n=r[0],i=r[1],s=r[2],h=r[3],v=r[4],o=r[5],f=r[6],y=r[7];return r[0]=n*a+v*e,r[1]=i*a+o*e,r[2]=s*a+f*e,r[3]=h*a+y*e,r[4]=v*a-n*e,r[5]=o*a-i*e,r[6]=f*a-s*e,r[7]=y*a-h*e,this},fromRotationTranslation:function(t,r){var e=t.x,a=t.y,n=t.z,i=t.w,s=e+e,h=a+a,v=n+n,o=e*s,f=e*h,y=e*v,u=a*h,c=a*v,x=n*v,l=i*s,d=i*h,M=i*v;return this.setValues(1-(u+x),f+M,y-d,0,f-M,1-(o+x),c+l,0,y+d,c-l,1-(o+u),0,r.x,r.y,r.z,1)},fromQuat:function(t){var r=t.x,e=t.y,a=t.z,n=t.w,i=r+r,s=e+e,h=a+a,v=r*i,o=r*s,f=r*h,y=e*s,u=e*h,c=a*h,x=n*i,l=n*s,d=n*h;return this.setValues(1-(y+c),o+d,f-l,0,o-d,1-(v+c),u+x,0,f+l,u-x,1-(v+y),0,0,0,0,1)},frustum:function(t,r,e,a,n,i){var s=1/(r-t),h=1/(a-e),v=1/(n-i);return this.setValues(n*2*s,0,0,0,0,n*2*h,0,0,(r+t)*s,(a+e)*h,(i+n)*v,-1,0,0,i*n*2*v,0)},perspective:function(t,r,e,a){var n=1/Math.tan(t/2),i=1/(e-a);return this.setValues(n/r,0,0,0,0,n,0,0,0,0,(a+e)*i,-1,0,0,2*a*e*i,0)},perspectiveLH:function(t,r,e,a){return this.setValues(2*e/t,0,0,0,0,2*e/r,0,0,0,0,-a/(e-a),1,0,0,e*a/(e-a),0)},ortho:function(t,r,e,a,n,i){var s=t-r,h=e-a,v=n-i;return s=s===0?s:1/s,h=h===0?h:1/h,v=v===0?v:1/v,this.setValues(-2*s,0,0,0,0,-2*h,0,0,0,0,2*v,0,(t+r)*s,(a+e)*h,(i+n)*v,1)},lookAtRH:function(t,r,e){var a=this.val;return j.subVectors(t,r),j.getLengthSquared()===0&&(j.z=1),j.normalize(),yt.crossVectors(e,j),yt.getLengthSquared()===0&&(Math.abs(e.z)===1?j.x+=1e-4:j.z+=1e-4,j.normalize(),yt.crossVectors(e,j)),yt.normalize(),Sr.crossVectors(j,yt),a[0]=yt.x,a[1]=yt.y,a[2]=yt.z,a[4]=Sr.x,a[5]=Sr.y,a[6]=Sr.z,a[8]=j.x,a[9]=j.y,a[10]=j.z,this},lookAt:function(t,r,e){var a=t.x,n=t.y,i=t.z,s=e.x,h=e.y,v=e.z,o=r.x,f=r.y,y=r.z;if(Math.abs(a-o)<Ir&&Math.abs(n-f)<Ir&&Math.abs(i-y)<Ir)return this.identity();var u=a-o,c=n-f,x=i-y,l=1/Math.sqrt(u*u+c*c+x*x);u*=l,c*=l,x*=l;var d=h*x-v*c,M=v*u-s*x,w=s*c-h*u;l=Math.sqrt(d*d+M*M+w*w),l?(l=1/l,d*=l,M*=l,w*=l):(d=0,M=0,w=0);var m=c*w-x*M,_=x*d-u*w,g=u*M-c*d;return l=Math.sqrt(m*m+_*_+g*g),l?(l=1/l,m*=l,_*=l,g*=l):(m=0,_=0,g=0),this.setValues(d,m,u,0,M,_,c,0,w,g,x,0,-(d*a+M*n+w*i),-(m*a+_*n+g*i),-(u*a+c*n+x*i),1)},yawPitchRoll:function(t,r,e){this.zero(),zt.zero(),qt.zero();var a=this.val,n=zt.val,i=qt.val,s=Math.sin(e),h=Math.cos(e);return a[10]=1,a[15]=1,a[0]=h,a[1]=s,a[4]=-s,a[5]=h,s=Math.sin(r),h=Math.cos(r),n[0]=1,n[15]=1,n[5]=h,n[10]=h,n[9]=-s,n[6]=s,s=Math.sin(t),h=Math.cos(t),i[5]=1,i[15]=1,i[0]=h,i[2]=-s,i[8]=s,i[10]=h,this.multiplyLocal(zt),this.multiplyLocal(qt),this},setWorldMatrix:function(t,r,e,a,n){return this.yawPitchRoll(t.y,t.x,t.z),zt.scaling(e.x,e.y,e.z),qt.xyz(r.x,r.y,r.z),this.multiplyLocal(zt),this.multiplyLocal(qt),a&&this.multiplyLocal(a),n&&this.multiplyLocal(n),this},multiplyToMat4:function(t,r){var e=this.val,a=t.val,n=e[0],i=e[1],s=e[2],h=e[3],v=e[4],o=e[5],f=e[6],y=e[7],u=e[8],c=e[9],x=e[10],l=e[11],d=e[12],M=e[13],w=e[14],m=e[15],_=a[0],g=a[1],b=a[2],I=a[3],S=a[4],P=a[5],z=a[6],T=a[7],E=a[8],$=a[9],L=a[10],C=a[11],A=a[12],G=a[13],B=a[14],H=a[15];return r.setValues(_*n+g*v+b*u+I*d,g*i+g*o+b*c+I*M,b*s+g*f+b*x+I*w,I*h+g*y+b*l+I*m,S*n+P*v+z*u+T*d,S*i+P*o+z*c+T*M,S*s+P*f+z*x+T*w,S*h+P*y+z*l+T*m,E*n+$*v+L*u+C*d,E*i+$*o+L*c+C*M,E*s+$*f+L*x+C*w,E*h+$*y+L*l+C*m,A*n+G*v+B*u+H*d,A*i+G*o+B*c+H*M,A*s+G*f+B*x+H*w,A*h+G*y+B*l+H*m)},fromRotationXYTranslation:function(t,r,e){var a=r.x,n=r.y,i=r.z,s=Math.sin(t.x),h=Math.cos(t.x),v=Math.sin(t.y),o=Math.cos(t.y),f=a,y=n,u=i,c=-s,x=0-c*v,l=0-h*v,d=c*o,M=h*o;return e||(f=o*a+v*i,y=x*a+h*n+d*i,u=l*a+s*n+M*i),this.setValues(o,x,l,0,0,h,s,0,v,d,M,0,f,y,u,1)},getMaxScaleOnAxis:function(){var t=this.val,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,e,a))}}),zt=new Er,qt=new Er,yt=new Ce,Sr=new Ce,j=new Ce,Ht=Er;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R1={getTintFromFloats:function(t,r,e,a){var n=(t*255|0)&255,i=(r*255|0)&255,s=(e*255|0)&255,h=(a*255|0)&255;return(h<<24|n<<16|i<<8|s)>>>0},getTintAppendFloatAlpha:function(t,r){var e=(r*255|0)&255;return(e<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,r){var e=(t>>16|0)&255,a=(t>>8|0)&255,n=(t|0)&255,i=(r*255|0)&255;return(i<<24|n<<16|a<<8|e)>>>0},getFloatsFromUintRGB:function(t){var r=(t>>16|0)&255,e=(t>>8|0)&255,a=(t|0)&255;return[r/255,e/255,a/255]},checkShaderMax:function(t,r){var e=Math.min(16,t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));return!r||r===-1?e:Math.min(e,r)},parseFragmentShaderMaxTextures:function(t,r){if(!t)return"";for(var e="",a=0;a<r;a++)a>0&&(e+=`
	else `),a<r-1&&(e+="if (outTexId < "+a+".5)"),e+=`
	{`,e+=`
		texture = texture2D(uMainSampler[`+a+"], outTexCoord);",e+=`
	}`;return t=t.replace(/%count%/gi,r.toString()),t.replace(/%forloop%/gi,e)},setGlowQuality:function(t,r,e,a){return e===void 0&&(e=r.config.glowFXQuality),a===void 0&&(a=r.config.glowFXDistance),t=t.replace(/__SIZE__/gi,(1/e/a).toFixed(7)),t=t.replace(/__DIST__/gi,a.toFixed(0)+".0"),t}};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var L1=Y,G1=R1,An=at,B1=new L1({Extends:An,initialize:function(r,e,a,n,i,s,h,v,o,f){s===void 0&&(s=16777215),h===void 0&&(h=1),v===void 0&&(v=0),o===void 0&&(o=0),f===void 0&&(f=0),An.call(this,r,e,a),this.vx=0,this.vy=0,this.vz=0,this.nx=v,this.ny=o,this.nz=f,this.u=n,this.v=i,this.color=s,this.alpha=h,this.tx=0,this.ty=0,this.ta=0,this.tu=n,this.tv=i},setUVs:function(t,r){return this.u=t,this.v=r,this.tu=t,this.tv=r,this},scrollUV:function(t,r){return this.tu+=t,this.tv+=r,this},scaleUV:function(t,r){return this.tu=this.u*t,this.tv=this.v*r,this},transformCoordinatesLocal:function(t,r,e,a){var n=this.x,i=this.y,s=this.z,h=t.val,v=n*h[0]+i*h[4]+s*h[8]+h[12],o=n*h[1]+i*h[5]+s*h[9]+h[13],f=n*h[2]+i*h[6]+s*h[10]+h[14],y=n*h[3]+i*h[7]+s*h[11]+h[15];this.vx=v/y*r,this.vy=-(o/y)*e,a<=0?this.vz=f/y:this.vz=-(f/y)},resize:function(t,r,e,a,n,i){return this.x=t,this.y=r,this.vx=this.x*e,this.vy=-this.y*a,this.vz=0,n<.5?this.vx+=e*(.5-n):n>.5&&(this.vx-=e*(n-.5)),i<.5?this.vy+=a*(.5-i):i>.5&&(this.vy-=a*(i-.5)),this},update:function(t,r,e,a,n,i,s,h){var v=this.vx*t+this.vy*e+n,o=this.vx*r+this.vy*a+i;return s&&(v=Math.round(v),o=Math.round(o)),this.tx=v,this.ty=o,this.ta=this.alpha*h,this},load:function(t,r,e,a,n){return t[++e]=this.tx,t[++e]=this.ty,t[++e]=this.tu,t[++e]=this.tv,t[++e]=a,t[++e]=n,r[++e]=G1.getTintAppendFloatAlpha(this.color,this.ta),e}}),Ar=B1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rn=Or,D=S1,F1=Ht,Ln=at,pt=Ar,Gn=new Ln,Bn=new Ln,dt=new F1,N1=function(t){var r=D(t,"mesh"),e=D(t,"texture",null),a=D(t,"frame"),n=D(t,"width",1),i=D(t,"height",n),s=D(t,"widthSegments",1),h=D(t,"heightSegments",s),v=D(t,"x",0),o=D(t,"y",0),f=D(t,"z",0),y=D(t,"rotateX",0),u=D(t,"rotateY",0),c=D(t,"rotateZ",0),x=D(t,"zIsUp",!0),l=D(t,"isOrtho",r?r.dirtyCache[11]:!1),d=D(t,"colors",[16777215]),M=D(t,"alphas",[1]),w=D(t,"tile",!1),m=D(t,"flipY",!1),_=D(t,"width",null),g={faces:[],verts:[]};Gn.set(v,o,f),Bn.set(y,u,c),dt.fromRotationXYTranslation(Bn,Gn,x);var b;if(!e&&r)e=r.texture,a||(b=r.frame);else if(r&&typeof e=="string")e=r.scene.sys.textures.get(e);else if(!e)return g;b||(b=e.get(a)),!_&&l&&e&&r&&(n=b.width/r.height,i=b.height/r.height);var I=n/2,S=i/2,P=Math.floor(s),z=Math.floor(h),T=P+1,E=z+1,$=n/P,L=i/z,C=[],A=[],G,B,H=0,er=1,Mt=0,St=1;b&&(H=b.u0,er=b.u1,m?(Mt=b.v1,St=b.v0):(Mt=b.v0,St=b.v1));var Qm=er-H,jm=St-Mt;for(B=0;B<E;B++){var Km=B*L-S;for(G=0;G<T;G++){var Jm=G*$-I;A.push(Jm,-Km);var tM=H+Qm*(G/P),rM=Mt+jm*(B/z);C.push(tM,rM)}}Array.isArray(d)||(d=[d]),Array.isArray(M)||(M=[M]);var Dr=0,Vr=0;for(B=0;B<z;B++)for(G=0;G<P;G++){var Yr=(G+T*B)*2,xt=(G+T*(B+1))*2,Ur=(G+1+T*(B+1))*2,lt=(G+1+T*B)*2,At=d[Vr],Rt=M[Dr],je=new pt(A[Yr],A[Yr+1],0,C[Yr],C[Yr+1],At,Rt).transformMat4(dt),Ke=new pt(A[xt],A[xt+1],0,C[xt],C[xt+1],At,Rt).transformMat4(dt),Je=new pt(A[lt],A[lt+1],0,C[lt],C[lt+1],At,Rt).transformMat4(dt),ta=new pt(A[xt],A[xt+1],0,C[xt],C[xt+1],At,Rt).transformMat4(dt),ra=new pt(A[Ur],A[Ur+1],0,C[Ur],C[Ur+1],At,Rt).transformMat4(dt),ea=new pt(A[lt],A[lt+1],0,C[lt],C[lt+1],At,Rt).transformMat4(dt);w&&(je.setUVs(H,St),Ke.setUVs(H,Mt),Je.setUVs(er,St),ta.setUVs(H,Mt),ra.setUVs(er,Mt),ea.setUVs(er,St)),Vr++,Vr===d.length&&(Vr=0),Dr++,Dr===M.length&&(Dr=0),g.verts.push(je,Ke,Je,ta,ra,ea),g.faces.push(new Rn(je,Ke,Je),new Rn(ta,ra,ea))}return r&&(r.faces=r.faces.concat(g.faces),r.vertices=r.vertices.concat(g.verts)),g},k1=N1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var D1=Or,V1=Ht,Fn=at,Te=Ar,Nn=new Fn,kn=new Fn,Rr=new V1,Y1=function(t,r,e,a,n,i,s,h,v,o){e===void 0&&(e=1),a===void 0&&(a=0),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=0),h===void 0&&(h=0),v===void 0&&(v=0),o===void 0&&(o=!0);var f={faces:[],verts:[]},y=t.materials;Nn.set(a,n,i),kn.set(s,h,v),Rr.fromRotationXYTranslation(kn,Nn,o);for(var u=0;u<t.models.length;u++)for(var c=t.models[u],x=c.vertices,l=c.textureCoords,d=c.faces,M=0;M<d.length;M++){var w=d[M],m=w.vertices[0],_=w.vertices[1],g=w.vertices[2],b=x[m.vertexIndex],I=x[_.vertexIndex],S=x[g.vertexIndex],P=m.textureCoordsIndex,z=_.textureCoordsIndex,T=g.textureCoordsIndex,E=P===-1?{u:0,v:1}:l[P],$=z===-1?{u:0,v:0}:l[z],L=T===-1?{u:1,v:1}:l[T],C=16777215;w.material!==""&&y[w.material]&&(C=y[w.material]);var A=new Te(b.x*e,b.y*e,b.z*e,E.u,E.v,C).transformMat4(Rr),G=new Te(I.x*e,I.y*e,I.z*e,$.u,$.v,C).transformMat4(Rr),B=new Te(S.x*e,S.y*e,S.z*e,L.u,L.v,C).transformMat4(Rr);f.verts.push(A,G,B),f.faces.push(new D1(A,G,B))}return r&&(r.faces=r.faces.concat(f.faces),r.vertices=r.vertices.concat(f.verts)),f},U1=Y1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var X1=Or,Dn=Ar,Z1=function(t,r,e,a,n,i,s,h){if(a===void 0&&(a=!1),i===void 0&&(i=16777215),s===void 0&&(s=1),h===void 0&&(h=!1),t.length!==r.length&&!a){console.warn("GenerateVerts: vertices and uvs count not equal");return}var v={faces:[],vertices:[]},o,f,y,u,c,x,l,d,M,w,m,_=a?3:2,g=Array.isArray(i),b=Array.isArray(s);if(Array.isArray(e)&&e.length>0)for(o=0;o<e.length;o++){var I=e[o],S=e[o]*2,P=e[o]*_;f=t[P],y=t[P+1],u=a?t[P+2]:0,c=r[S],x=r[S+1],h&&(x=1-x),l=g?i[I]:i,d=b?s[I]:s,M=0,w=0,m=0,n&&(M=n[P],w=n[P+1],m=a?n[P+2]:0),v.vertices.push(new Dn(f,y,u,c,x,l,d,M,w,m))}else{var z=0,T=0;for(o=0;o<t.length;o+=_)f=t[o],y=t[o+1],u=a?t[o+2]:0,c=r[z],x=r[z+1],l=g?i[T]:i,d=b?s[T]:s,M=0,w=0,m=0,n&&(M=n[o],w=n[o+1],m=a?n[o+2]:0),v.vertices.push(new Dn(f,y,u,c,x,l,d,M,w,m)),z+=2,T++}for(o=0;o<v.vertices.length;o+=3){var E=v.vertices[o],$=v.vertices[o+1],L=v.vertices[o+2];v.faces.push(new X1(E,$,L))}return v},q1=Z1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vn=!0,Yn="untitled",Wt="",Pe="";function H1(t){var r=t.indexOf("#");return r>-1?t.substring(0,r):t}function Qt(t){return t.models.length===0&&t.models.push({faces:[],name:Yn,textureCoords:[],vertexNormals:[],vertices:[]}),Wt="",t.models[t.models.length-1]}function W1(t,r){var e=t.length>=2?t[1]:Yn;r.models.push({faces:[],name:e,textureCoords:[],vertexNormals:[],vertices:[]}),Wt=""}function Q1(t){t.length===2&&(Wt=t[1])}function j1(t,r){var e=t.length,a=e>=2?parseFloat(t[1]):0,n=e>=3?parseFloat(t[2]):0,i=e>=4?parseFloat(t[3]):0;Qt(r).vertices.push({x:a,y:n,z:i})}function K1(t,r){var e=t.length,a=e>=2?parseFloat(t[1]):0,n=e>=3?parseFloat(t[2]):0,i=e>=4?parseFloat(t[3]):0;isNaN(a)&&(a=0),isNaN(n)&&(n=0),isNaN(i)&&(i=0),Vn&&(n=1-n),Qt(r).textureCoords.push({u:a,v:n,w:i})}function J1(t,r){var e=t.length,a=e>=2?parseFloat(t[1]):0,n=e>=3?parseFloat(t[2]):0,i=e>=4?parseFloat(t[3]):0;Qt(r).vertexNormals.push({x:a,y:n,z:i})}function ty(t,r){var e=t.length-1;if(!(e<3)){for(var a={group:Wt,material:Pe,vertices:[]},n=0;n<e;n++){var i=t[n+1],s=i.split("/"),h=s.length;if(!(h<1||h>3)){var v=0,o=0,f=0;v=parseInt(s[0],10),h>1&&s[1]!==""&&(o=parseInt(s[1],10)),h>2&&(f=parseInt(s[2],10)),v!==0&&(v<0&&(v=Qt(r).vertices.length+1+v),o-=1,v-=1,f-=1,a.vertices.push({textureCoordsIndex:o,vertexIndex:v,vertexNormalIndex:f}))}}Qt(r).faces.push(a)}}function ry(t,r){t.length>=2&&r.materialLibraries.push(t[1])}function ey(t){t.length>=2&&(Pe=t[1])}var ay=function(t,r){r===void 0&&(r=!0),Vn=r;var e={materials:{},materialLibraries:[],models:[]};Wt="",Pe="";for(var a=t.split(`
`),n=0;n<a.length;n++){var i=H1(a[n]),s=i.replace(/\s\s+/g," ").trim().split(" ");switch(s[0].toLowerCase()){case"o":W1(s,e);break;case"g":Q1(s);break;case"v":j1(s,e);break;case"vt":K1(s,e);break;case"vn":J1(s,e);break;case"f":ty(s,e);break;case"mtllib":ry(s,e);break;case"usemtl":ey(s);break}}return e},ny=ay;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var iy=function(t,r,e){return t<<16|r<<8|e},sy=iy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hy=sy,vy=function(t){for(var r={},e=t.split(`
`),a="",n=0;n<e.length;n++){var i=e[n].trim();if(!(i.indexOf("#")===0||i==="")){var s=i.replace(/\s\s+/g," ").trim().split(" ");switch(s[0].toLowerCase()){case"newmtl":{a=s[1];break}case"kd":{var h=Math.floor(s[1]*255),v=s.length>=2?Math.floor(s[2]*255):h,o=s.length>=3?Math.floor(s[3]*255):h;r[a]=hy(h,v,o);break}}}}return r},oy=vy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fy=function(t,r,e,a){var n,i;if(e===void 0&&a===void 0){var s=t.getInCenter();n=s.x,i=s.y}var h=Math.cos(r),v=Math.sin(r),o=t.vertex1,f=t.vertex2,y=t.vertex3,u=o.x-n,c=o.y-i;o.set(u*h-c*v+n,u*v+c*h+i),u=f.x-n,c=f.y-i,f.set(u*h-c*v+n,u*v+c*h+i),u=y.x-n,c=y.y-i,y.set(u*h-c*v+n,u*v+c*h+i)},uy=fy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yy={Face:Or,GenerateGridVerts:k1,GenerateObjVerts:U1,GenerateVerts:q1,ParseObj:ny,ParseObjMaterial:oy,RotateFace:uy,Vertex:Ar},cy=yy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xy=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))},ly=xy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dy=O,my=function(t){return new dy(t.x,t.y)},My=my;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wy=function(t,r){return r.setTo(t.x,t.y)},_y=wy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gy=function(t,r){return t.x===r.x&&t.y===r.y},by=gy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $y=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))},Cy=$y;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ty=O,Py=function(t,r){if(r===void 0&&(r=new Ty),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var e=t.length;if(e<1)throw new Error("GetCentroid points array must not be empty");if(e===1)r.x=t[0].x,r.y=t[0].y;else{for(var a=0;a<e;a++)r.x+=t[a].x,r.y+=t[a].y;r.x/=e,r.y/=e}return r},zy=Py;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var py=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},Un=py;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oy=function(t){return t.x*t.x+t.y*t.y},Xn=Oy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Iy=J,Ey=function(t,r){r===void 0&&(r=new Iy);for(var e=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,s=0;s<t.length;s++){var h=t[s];h.x>e&&(e=h.x),h.x<a&&(a=h.x),h.y>n&&(n=h.y),h.y<i&&(i=h.y)}return r.x=a,r.y=i,r.width=e-a,r.height=n-i,r},Sy=Ey;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ay=O,Ry=function(t,r,e,a){return e===void 0&&(e=0),a===void 0&&(a=new Ay),a.x=t.x+(r.x-t.x)*e,a.y=t.y+(r.y-t.y)*e,a},Ly=Ry;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gy=function(t){return t.setTo(t.y,t.x)},By=Gy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fy=O,Ny=function(t,r){return r===void 0&&(r=new Fy),r.setTo(-t.x,-t.y)},ky=Ny;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dy=O,Vy=Xn,Yy=function(t,r,e){e===void 0&&(e=new Dy);var a=t.x*r.x+t.y*r.y,n=a/Vy(r);return n!==0&&(e.x=n*r.x,e.y=n*r.y),e},Uy=Yy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xy=O,Zy=function(t,r,e){e===void 0&&(e=new Xy);var a=t.x*r.x+t.y*r.y;return a!==0&&(e.x=a*r.x,e.y=a*r.y),e},qy=Zy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hy=Un,Wy=function(t,r){if(t.x!==0||t.y!==0){var e=Hy(t);t.x/=e,t.y/=e}return t.x*=r,t.y*=r,t},Qy=Wy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q=O;q.Ceil=ly,q.Clone=My,q.CopyFrom=_y,q.Equals=by,q.Floor=Cy,q.GetCentroid=zy,q.GetMagnitude=Un,q.GetMagnitudeSq=Xn,q.GetRectangleFromPoints=Sy,q.Interpolate=Ly,q.Invert=By,q.Negative=ky,q.Project=Uy,q.ProjectUnit=qy,q.SetMagnitude=Qy;var jy=q;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ky=function(t,r,e){for(var a=!1,n=-1,i=t.points.length-1;++n<t.points.length;i=n){var s=t.points[n].x,h=t.points[n].y,v=t.points[i].x,o=t.points[i].y;(h<=e&&e<o||o<=e&&e<h)&&r<(v-s)*(e-h)/(o-h)+s&&(a=!a)}return a},ze=Ky;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jy=ft,t0=ut,r0=function(t){for(var r=t.points,e=0,a=0;a<r.length;a++){var n=r[a],i=r[(a+1)%r.length],s=new t0(n.x,n.y,i.x,i.y);e+=Jy(s)}return e},Zn=r0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var e0=ft,a0=ut,n0=Zn,i0=function(t,r,e,a){a===void 0&&(a=[]);var n=t.points,i=n0(t);!r&&e>0&&(r=i/e);for(var s=0;s<r;s++)for(var h=i*(s/r),v=0,o=0;o<n.length;o++){var f=n[o],y=n[(o+1)%n.length],u=new a0(f.x,f.y,y.x,y.y),c=e0(u);if(h<v||h>v+c){v+=c;continue}var x=u.getPoint((h-v)/c);a.push(x);break}return a},qn=i0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s0=Y,h0=ze,v0=qn,o0=ot,f0=new s0({initialize:function(r){this.type=o0.POLYGON,this.area=0,this.points=[],r&&this.setTo(r)},contains:function(t,r){return h0(this,t,r)},setTo:function(t){if(this.area=0,this.points=[],typeof t=="string"&&(t=t.split(" ")),!Array.isArray(t))return this;for(var r,e=0;e<t.length;e++)r={x:0,y:0},typeof t[e]=="number"||typeof t[e]=="string"?(r.x=parseFloat(t[e]),r.y=parseFloat(t[e+1]),e++):Array.isArray(t[e])?(r.x=t[e][0],r.y=t[e][1]):(r.x=t[e].x,r.y=t[e].y),this.points.push(r);return this.calculateArea(),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t=0,r,e,a=0;a<this.points.length-1;a++)r=this.points[a],e=this.points[a+1],t+=(e.x-r.x)*(r.y+e.y);return r=this.points[0],e=this.points[this.points.length-1],t+=(r.x-e.x)*(e.y+r.y),this.area=-t*.5,this.area},getPoints:function(t,r,e){return v0(this,t,r,e)}}),Hn=f0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var u0=Hn,y0=function(t){return new u0(t.points)},c0=y0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x0=ze,l0=function(t,r){return x0(t,r.x,r.y)},d0=l0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function pe(t,r,e){e=e||2;var a=r&&r.length,n=a?r[0]*e:t.length,i=Wn(t,0,n,e,!0),s=[];if(!i||i.next===i.prev)return s;var h,v,o,f,y,u,c;if(a&&(i=g0(t,r,i,e)),t.length>80*e){h=o=t[0],v=f=t[1];for(var x=e;x<n;x+=e)y=t[x],u=t[x+1],y<h&&(h=y),u<v&&(v=u),y>o&&(o=y),u>f&&(f=u);c=Math.max(o-h,f-v),c=c!==0?32767/c:0}return jt(i,s,e,h,v,c,0),s}function Wn(t,r,e,a,n){var i,s;if(n===Ee(t,r,e,a)>0)for(i=r;i<e;i+=a)s=Kn(i,t[i],t[i+1],s);else for(i=e-a;i>=r;i-=a)s=Kn(i,t[i],t[i+1],s);return s&&Lr(s,s.next)&&(Jt(s),s=s.next),s}function mt(t,r){if(!t)return t;r||(r=t);var e=t,a;do if(a=!1,!e.steiner&&(Lr(e,e.next)||k(e.prev,e,e.next)===0)){if(Jt(e),e=r=e.prev,e===e.next)break;a=!0}else e=e.next;while(a||e!==r);return r}function jt(t,r,e,a,n,i,s){if(t){!s&&i&&P0(t,a,n,i);for(var h=t,v,o;t.prev!==t.next;){if(v=t.prev,o=t.next,i?M0(t,a,n,i):m0(t)){r.push(v.i/e|0),r.push(t.i/e|0),r.push(o.i/e|0),Jt(t),t=o.next,h=o.next;continue}if(t=o,t===h){s?s===1?(t=w0(mt(t),r,e),jt(t,r,e,a,n,i,2)):s===2&&_0(t,r,e,a,n,i):jt(mt(t),r,e,a,n,i,1);break}}}}function m0(t){var r=t.prev,e=t,a=t.next;if(k(r,e,a)>=0)return!1;for(var n=r.x,i=e.x,s=a.x,h=r.y,v=e.y,o=a.y,f=n<i?n<s?n:s:i<s?i:s,y=h<v?h<o?h:o:v<o?v:o,u=n>i?n>s?n:s:i>s?i:s,c=h>v?h>o?h:o:v>o?v:o,x=a.next;x!==r;){if(x.x>=f&&x.x<=u&&x.y>=y&&x.y<=c&&Ot(n,h,i,v,s,o,x.x,x.y)&&k(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function M0(t,r,e,a){var n=t.prev,i=t,s=t.next;if(k(n,i,s)>=0)return!1;for(var h=n.x,v=i.x,o=s.x,f=n.y,y=i.y,u=s.y,c=h<v?h<o?h:o:v<o?v:o,x=f<y?f<u?f:u:y<u?y:u,l=h>v?h>o?h:o:v>o?v:o,d=f>y?f>u?f:u:y>u?y:u,M=Oe(c,x,r,e,a),w=Oe(l,d,r,e,a),m=t.prevZ,_=t.nextZ;m&&m.z>=M&&_&&_.z<=w;){if(m.x>=c&&m.x<=l&&m.y>=x&&m.y<=d&&m!==n&&m!==s&&Ot(h,f,v,y,o,u,m.x,m.y)&&k(m.prev,m,m.next)>=0||(m=m.prevZ,_.x>=c&&_.x<=l&&_.y>=x&&_.y<=d&&_!==n&&_!==s&&Ot(h,f,v,y,o,u,_.x,_.y)&&k(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;m&&m.z>=M;){if(m.x>=c&&m.x<=l&&m.y>=x&&m.y<=d&&m!==n&&m!==s&&Ot(h,f,v,y,o,u,m.x,m.y)&&k(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;_&&_.z<=w;){if(_.x>=c&&_.x<=l&&_.y>=x&&_.y<=d&&_!==n&&_!==s&&Ot(h,f,v,y,o,u,_.x,_.y)&&k(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function w0(t,r,e){var a=t;do{var n=a.prev,i=a.next.next;!Lr(n,i)&&Qn(n,a,a.next,i)&&Kt(n,i)&&Kt(i,n)&&(r.push(n.i/e|0),r.push(a.i/e|0),r.push(i.i/e|0),Jt(a),Jt(a.next),a=t=i),a=a.next}while(a!==t);return mt(a)}function _0(t,r,e,a,n,i){var s=t;do{for(var h=s.next.next;h!==s.prev;){if(s.i!==h.i&&O0(s,h)){var v=jn(s,h);s=mt(s,s.next),v=mt(v,v.next),jt(s,r,e,a,n,i,0),jt(v,r,e,a,n,i,0);return}h=h.next}s=s.next}while(s!==t)}function g0(t,r,e,a){var n=[],i,s,h,v,o;for(i=0,s=r.length;i<s;i++)h=r[i]*a,v=i<s-1?r[i+1]*a:t.length,o=Wn(t,h,v,a,!1),o===o.next&&(o.steiner=!0),n.push(p0(o));for(n.sort(b0),i=0;i<n.length;i++)e=$0(n[i],e);return e}function b0(t,r){return t.x-r.x}function $0(t,r){var e=C0(t,r);if(!e)return r;var a=jn(e,t);return mt(a,a.next),mt(e,e.next)}function C0(t,r){var e=r,a=t.x,n=t.y,i=-1/0,s;do{if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){var h=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=a&&h>i&&(i=h,s=e.x<e.next.x?e:e.next,h===a))return s}e=e.next}while(e!==r);if(!s)return null;var v=s,o=s.x,f=s.y,y=1/0,u;e=s;do a>=e.x&&e.x>=o&&a!==e.x&&Ot(n<f?a:i,n,o,f,n<f?i:a,n,e.x,e.y)&&(u=Math.abs(n-e.y)/(a-e.x),Kt(e,t)&&(u<y||u===y&&(e.x>s.x||e.x===s.x&&T0(s,e)))&&(s=e,y=u)),e=e.next;while(e!==v);return s}function T0(t,r){return k(t.prev,t,r.prev)<0&&k(r.next,t,t.next)<0}function P0(t,r,e,a){var n=t;do n.z===0&&(n.z=Oe(n.x,n.y,r,e,a)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,z0(n)}function z0(t){var r,e,a,n,i,s,h,v,o=1;do{for(e=t,t=null,i=null,s=0;e;){for(s++,a=e,h=0,r=0;r<o&&(h++,a=a.nextZ,!!a);r++);for(v=o;h>0||v>0&&a;)h!==0&&(v===0||!a||e.z<=a.z)?(n=e,e=e.nextZ,h--):(n=a,a=a.nextZ,v--),i?i.nextZ=n:t=n,n.prevZ=i,i=n;e=a}i.nextZ=null,o*=2}while(s>1);return t}function Oe(t,r,e,a,n){return t=(t-e)*n|0,r=(r-a)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t|r<<1}function p0(t){var r=t,e=t;do(r.x<e.x||r.x===e.x&&r.y<e.y)&&(e=r),r=r.next;while(r!==t);return e}function Ot(t,r,e,a,n,i,s,h){return(n-s)*(r-h)>=(t-s)*(i-h)&&(t-s)*(a-h)>=(e-s)*(r-h)&&(e-s)*(i-h)>=(n-s)*(a-h)}function O0(t,r){return t.next.i!==r.i&&t.prev.i!==r.i&&!I0(t,r)&&(Kt(t,r)&&Kt(r,t)&&E0(t,r)&&(k(t.prev,t,r.prev)||k(t,r.prev,r))||Lr(t,r)&&k(t.prev,t,t.next)>0&&k(r.prev,r,r.next)>0)}function k(t,r,e){return(r.y-t.y)*(e.x-r.x)-(r.x-t.x)*(e.y-r.y)}function Lr(t,r){return t.x===r.x&&t.y===r.y}function Qn(t,r,e,a){var n=Br(k(t,r,e)),i=Br(k(t,r,a)),s=Br(k(e,a,t)),h=Br(k(e,a,r));return!!(n!==i&&s!==h||n===0&&Gr(t,e,r)||i===0&&Gr(t,a,r)||s===0&&Gr(e,t,a)||h===0&&Gr(e,r,a))}function Gr(t,r,e){return r.x<=Math.max(t.x,e.x)&&r.x>=Math.min(t.x,e.x)&&r.y<=Math.max(t.y,e.y)&&r.y>=Math.min(t.y,e.y)}function Br(t){return t>0?1:t<0?-1:0}function I0(t,r){var e=t;do{if(e.i!==t.i&&e.next.i!==t.i&&e.i!==r.i&&e.next.i!==r.i&&Qn(e,e.next,t,r))return!0;e=e.next}while(e!==t);return!1}function Kt(t,r){return k(t.prev,t,t.next)<0?k(t,r,t.next)>=0&&k(t,t.prev,r)>=0:k(t,r,t.prev)<0||k(t,t.next,r)<0}function E0(t,r){var e=t,a=!1,n=(t.x+r.x)/2,i=(t.y+r.y)/2;do e.y>i!=e.next.y>i&&e.next.y!==e.y&&n<(e.next.x-e.x)*(i-e.y)/(e.next.y-e.y)+e.x&&(a=!a),e=e.next;while(e!==t);return a}function jn(t,r){var e=new Ie(t.i,t.x,t.y),a=new Ie(r.i,r.x,r.y),n=t.next,i=r.prev;return t.next=r,r.prev=t,e.next=n,n.prev=e,a.next=e,e.prev=a,i.next=a,a.prev=i,a}function Kn(t,r,e,a){var n=new Ie(t,r,e);return a?(n.next=a.next,n.prev=a,a.next.prev=n,a.next=n):(n.prev=n,n.next=n),n}function Jt(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ie(t,r,e){this.i=t,this.x=r,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}pe.deviation=function(t,r,e,a){var n=r&&r.length,i=n?r[0]*e:t.length,s=Math.abs(Ee(t,0,i,e));if(n)for(var h=0,v=r.length;h<v;h++){var o=r[h]*e,f=h<v-1?r[h+1]*e:t.length;s-=Math.abs(Ee(t,o,f,e))}var y=0;for(h=0;h<a.length;h+=3){var u=a[h]*e,c=a[h+1]*e,x=a[h+2]*e;y+=Math.abs((t[u]-t[x])*(t[c+1]-t[u+1])-(t[u]-t[c])*(t[x+1]-t[u+1]))}return s===0&&y===0?0:Math.abs((y-s)/s)};function Ee(t,r,e,a){for(var n=0,i=r,s=e-a;i<e;i+=a)n+=(t[s]-t[i])*(t[i+1]+t[s+1]),s=i;return n}pe.flatten=function(t){for(var r=t[0][0].length,e={vertices:[],holes:[],dimensions:r},a=0,n=0;n<t.length;n++){for(var i=0;i<t[n].length;i++)for(var s=0;s<r;s++)e.vertices.push(t[n][i][s]);n>0&&(a+=t[n-1].length,e.holes.push(a))}return e};var Jn=pe;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S0=J,A0=function(t,r){r===void 0&&(r=new S0);for(var e=1/0,a=1/0,n=-e,i=-a,s,h=0;h<t.points.length;h++)s=t.points[h],e=Math.min(e,s.x),a=Math.min(a,s.y),n=Math.max(n,s.x),i=Math.max(i,s.y);return r.x=e,r.y=a,r.width=n-e,r.height=i-a,r},R0=A0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var L0=function(t,r){r===void 0&&(r=[]);for(var e=0;e<t.points.length;e++)r.push(t.points[e].x),r.push(t.points[e].y);return r},G0=L0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B0=function(t){return t.points.reverse(),t},F0=B0;function N0(t,r){var e=t.x-r.x,a=t.y-r.y;return e*e+a*a}function k0(t,r,e){var a=r.x,n=r.y,i=e.x-a,s=e.y-n;if(i!==0||s!==0){var h=((t.x-a)*i+(t.y-n)*s)/(i*i+s*s);h>1?(a=e.x,n=e.y):h>0&&(a+=i*h,n+=s*h)}return i=t.x-a,s=t.y-n,i*i+s*s}function D0(t,r){for(var e=t[0],a=[e],n,i=1,s=t.length;i<s;i++)n=t[i],N0(n,e)>r&&(a.push(n),e=n);return e!==n&&a.push(n),a}function Se(t,r,e,a,n){for(var i=a,s,h=r+1;h<e;h++){var v=k0(t[h],t[r],t[e]);v>i&&(s=h,i=v)}i>a&&(s-r>1&&Se(t,r,s,a,n),n.push(t[s]),e-s>1&&Se(t,s,e,a,n))}function V0(t,r){var e=t.length-1,a=[t[0]];return Se(t,0,e,r,a),a.push(t[e]),a}var Y0=function(t,r,e){r===void 0&&(r=1),e===void 0&&(e=!1);var a=t.points;if(a.length>2){var n=r*r;e||(a=D0(a,n)),t.setTo(V0(a,n))}return t},U0=Y0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ti=function(t,r){return t[0]=r[0],t[1]=r[1],t},X0=function(t){var r,e=[],a=t.points;for(r=0;r<a.length;r++)e.push([a[r].x,a[r].y]);var n=[];for(e.length>0&&n.push(ti([0,0],e[0])),r=0;r<e.length-1;r++){var i=e[r],s=e[r+1],h=i[0],v=i[1],o=s[0],f=s[1];n.push([.85*h+.15*o,.85*v+.15*f]),n.push([.15*h+.85*o,.15*v+.85*f])}return e.length>1&&n.push(ti([0,0],e[e.length-1])),t.setTo(n)},Z0=X0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q0=function(t,r,e){for(var a=t.points,n=0;n<a.length;n++)a[n].x+=r,a[n].y+=e;return t},H0=q0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var K=Hn;K.Clone=c0,K.Contains=ze,K.ContainsPoint=d0,K.Earcut=Jn,K.GetAABB=R0,K.GetNumberArray=G0,K.GetPoints=qn,K.Perimeter=Zn,K.Reverse=F0,K.Simplify=U0,K.Smooth=Z0,K.Translate=H0;var W0=K;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Q0=function(t){return t.width*t.height},j0=Q0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var K0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t},J0=K0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tc=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t},rc=tc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ec=function(t,r,e){return t.x=r-t.width/2,t.y=e-t.height/2,t},ri=ec;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ac=J,nc=function(t){return new ac(t.x,t.y,t.width,t.height)},ic=nc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sc=fr,hc=function(t,r){return sc(t,r.x,r.y)},vc=hc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var oc=function(t,r){return r.width*r.height>t.width*t.height?!1:r.x>t.x&&r.x<t.right&&r.right>t.x&&r.right<t.right&&r.y>t.y&&r.y<t.bottom&&r.bottom>t.y&&r.bottom<t.bottom},ei=oc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fc=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},uc=fc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yc=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},cc=yc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xc=function(t){return t.height===0?NaN:t.width/t.height},Ae=xc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ai=Ae,lc=function(t,r){var e=ai(t);return e<ai(r)?t.setSize(r.height*e,r.height):t.setSize(r.width,r.width/e),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},dc=lc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ni=Ae,mc=function(t,r){var e=ni(t);return e>ni(r)?t.setSize(r.height*e,r.height):t.setSize(r.width,r.width/e),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},Mc=mc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wc=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t},_c=wc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gc=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t},bc=gc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $c=J,ii=W,Cc=function(t,r){if(r===void 0&&(r=new $c),t.length===0)return r;for(var e=Number.MAX_VALUE,a=Number.MAX_VALUE,n=ii.MIN_SAFE_INTEGER,i=ii.MIN_SAFE_INTEGER,s,h,v,o=0;o<t.length;o++)s=t[o],Array.isArray(s)?(h=s[0],v=s[1]):(h=s.x,v=s.y),e=Math.min(e,h),a=Math.min(a,v),n=Math.max(n,h),i=Math.max(i,v);return r.x=e,r.y=a,r.width=n-e,r.height=i-a,r},Tc=Cc;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pc=J,zc=function(t,r,e,a,n){return n===void 0&&(n=new Pc),n.setTo(Math.min(t,e),Math.min(r,a),Math.abs(t-e),Math.abs(r-a))},pc=zc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oc=O,Ic=function(t,r){return r===void 0&&(r=new Oc),r.x=t.centerX,r.y=t.centerY,r},Ec=Ic;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sc=O,Ac=function(t,r){return r===void 0&&(r=new Sc),r.x=t.width,r.y=t.height,r},Rc=Ac;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lc=ri,Gc=function(t,r,e){var a=t.centerX,n=t.centerY;return t.setSize(t.width+r*2,t.height+e*2),Lc(t,a,n)},Bc=Gc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fc=J,Nc=wr,kc=function(t,r,e){return e===void 0&&(e=new Fc),Nc(t,r)?(e.x=Math.max(t.x,r.x),e.y=Math.max(t.y,r.y),e.width=Math.min(t.right,r.right)-e.x,e.height=Math.min(t.bottom,r.bottom)-e.y):e.setEmpty(),e},Dc=kc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var si=ur,Vc=O,Yc=function(t,r,e,a){if(a===void 0&&(a=[]),!r&&!e)return a;r?e=Math.round(si(t)/r):r=si(t)/e;for(var n=t.x,i=t.y,s=0,h=0;h<e;h++)switch(a.push(new Vc(n,i)),s){case 0:n+=r,n>=t.right&&(s=1,i+=n-t.right,n=t.right);break;case 1:i+=r,i>=t.bottom&&(s=2,n-=i-t.bottom,i=t.bottom);break;case 2:n-=r,n<=t.left&&(s=3,i-=t.left-n,n=t.left);break;case 3:i-=r,i<=t.top&&(s=0,i=t.top);break}return a},Uc=Yc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xc=function(t,r){for(var e=t.x,a=t.right,n=t.y,i=t.bottom,s=0;s<r.length;s++)e=Math.min(e,r[s].x),a=Math.max(a,r[s].x),n=Math.min(n,r[s].y),i=Math.max(i,r[s].y);return t.x=e,t.y=n,t.width=a-e,t.height=i-n,t},Zc=Xc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qc=function(t,r){var e=Math.min(t.x,r.x),a=Math.max(t.right,r.right);t.x=e,t.width=a-e;var n=Math.min(t.y,r.y),i=Math.max(t.bottom,r.bottom);return t.y=n,t.height=i-n,t},Hc=qc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wc=function(t,r,e){var a=Math.min(t.x,r),n=Math.max(t.right,r);t.x=a,t.width=n-a;var i=Math.min(t.y,e),s=Math.max(t.bottom,e);return t.y=i,t.height=s-i,t},Qc=Wc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jc=function(t,r,e){return t.x+=r,t.y+=e,t},Kc=jc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jc=function(t,r){return t.x+=r.x,t.y+=r.y,t},tx=Jc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rx=function(t,r){return t.x<r.right&&t.right>r.x&&t.y<r.bottom&&t.bottom>r.y},ex=rx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ax=W,nx=function(t){return t*ax.DEG_TO_RAD},hi=nx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ix=O,sx=hi,hx=function(t,r,e){e===void 0&&(e=new ix),r=sx(r);var a=Math.sin(r),n=Math.cos(r),i=n>0?t.width/2:t.width/-2,s=a>0?t.height/2:t.height/-2;return Math.abs(i*a)<Math.abs(s*n)?s=i*a/n:i=s*n/a,e.x=i+t.centerX,e.y=s+t.centerY,e},vx=hx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ox=function(t,r){return Math.floor(Math.random()*(r-t+1)+t)},vi=ox;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fx=vi,ux=ei,yx=O,cx=function(t,r,e){if(e===void 0&&(e=new yx),ux(t,r))switch(fx(0,3)){case 0:e.x=t.x+Math.random()*(r.right-t.x),e.y=t.y+Math.random()*(r.top-t.y);break;case 1:e.x=r.x+Math.random()*(t.right-r.x),e.y=r.bottom+Math.random()*(t.bottom-r.bottom);break;case 2:e.x=t.x+Math.random()*(r.x-t.x),e.y=r.y+Math.random()*(t.bottom-r.y);break;case 3:e.x=r.right+Math.random()*(t.right-r.right),e.y=t.y+Math.random()*(r.bottom-t.y);break}return e},xx=cx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lx=function(t,r){return t.width===r.width&&t.height===r.height},dx=lx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mx=function(t,r,e){return e===void 0&&(e=r),t.width*=r,t.height*=e,t},Mx=mx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wx=J,_x=function(t,r,e){e===void 0&&(e=new wx);var a=Math.min(t.x,r.x),n=Math.min(t.y,r.y),i=Math.max(t.right,r.right)-a,s=Math.max(t.bottom,r.bottom)-n;return e.setTo(a,n,i,s)},gx=_x;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var p=J;p.Area=j0,p.Ceil=J0,p.CeilAll=rc,p.CenterOn=ri,p.Clone=ic,p.Contains=fr,p.ContainsPoint=vc,p.ContainsRect=ei,p.CopyFrom=uc,p.Decompose=sn,p.Equals=cc,p.FitInside=dc,p.FitOutside=Mc,p.Floor=_c,p.FloorAll=bc,p.FromPoints=Tc,p.FromXY=pc,p.GetAspectRatio=Ae,p.GetCenter=Ec,p.GetPoint=ie,p.GetPoints=Ga,p.GetSize=Rc,p.Inflate=Bc,p.Intersection=Dc,p.MarchingAnts=Uc,p.MergePoints=Zc,p.MergeRect=Hc,p.MergeXY=Qc,p.Offset=Kc,p.OffsetPoint=tx,p.Overlaps=ex,p.Perimeter=ur,p.PerimeterPoint=vx,p.Random=Ya,p.RandomOutside=xx,p.SameDimensions=dx,p.Scale=Mx,p.Union=gx;var bx=p;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $x=O,Re=ft,Cx=function(t,r,e){e===void 0&&(e=new $x);var a=t.getLineA(),n=t.getLineB(),i=t.getLineC();if(r<=0||r>=1)return e.x=a.x1,e.y=a.y1,e;var s=Re(a),h=Re(n),v=Re(i),o=s+h+v,f=o*r,y=0;return f<s?(y=f/s,e.x=a.x1+(a.x2-a.x1)*y,e.y=a.y1+(a.y2-a.y1)*y):f>s+h?(f-=s+h,y=f/v,e.x=i.x1+(i.x2-i.x1)*y,e.y=i.y1+(i.y2-i.y1)*y):(f-=s,y=f/h,e.x=n.x1+(n.x2-n.x1)*y,e.y=n.y1+(n.y2-n.y1)*y),e},oi=Cx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Le=ft,Tx=O,Px=function(t,r,e,a){a===void 0&&(a=[]);var n=t.getLineA(),i=t.getLineB(),s=t.getLineC(),h=Le(n),v=Le(i),o=Le(s),f=h+v+o;!r&&e>0&&(r=f/e);for(var y=0;y<r;y++){var u=f*(y/r),c=0,x=new Tx;u<h?(c=u/h,x.x=n.x1+(n.x2-n.x1)*c,x.y=n.y1+(n.y2-n.y1)*c):u>h+v?(u-=h+v,c=u/o,x.x=s.x1+(s.x2-s.x1)*c,x.y=s.y1+(s.y2-s.y1)*c):(u-=h,c=u/v,x.x=i.x1+(i.x2-i.x1)*c,x.y=i.y1+(i.y2-i.y1)*c),a.push(x)}return a},fi=Px;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zx=O,px=function(t,r){r===void 0&&(r=new zx);var e=t.x2-t.x1,a=t.y2-t.y1,n=t.x3-t.x1,i=t.y3-t.y1,s=Math.random(),h=Math.random();return s+h>=1&&(s=1-s,h=1-h),r.x=t.x1+(e*s+n*h),r.y=t.y1+(a*s+i*h),r},ui=px;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ox=Y,Ix=gr,Ex=oi,Sx=fi,Ax=ot,Ge=ut,Rx=ui,Lx=new Ox({initialize:function(r,e,a,n,i,s){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=0),this.type=Ax.TRIANGLE,this.x1=r,this.y1=e,this.x2=a,this.y2=n,this.x3=i,this.y3=s},contains:function(t,r){return Ix(this,t,r)},getPoint:function(t,r){return Ex(this,t,r)},getPoints:function(t,r,e){return Sx(this,t,r,e)},getRandomPoint:function(t){return Rx(this,t)},setTo:function(t,r,e,a,n,i){return t===void 0&&(t=0),r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x1=t,this.y1=r,this.x2=e,this.y2=a,this.x3=n,this.y3=i,this},getLineA:function(t){return t===void 0&&(t=new Ge),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return t===void 0&&(t=new Ge),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return t===void 0&&(t=new Ge),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1<=this.x2&&this.x1<=this.x3?r=this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1>=this.x2&&this.x1>=this.x3?r=this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1<=this.y2&&this.y1<=this.y3?r=this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1>=this.y2&&this.y1>=this.y3?r=this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}}}),tr=Lx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gx=function(t){var r=t.x1,e=t.y1,a=t.x2,n=t.y2,i=t.x3,s=t.y3;return Math.abs(((i-r)*(n-e)-(a-r)*(s-e))/2)},Bx=Gx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fx=tr,Nx=function(t,r,e){var a=e*(Math.sqrt(3)/2),n=t,i=r,s=t+e/2,h=r+a,v=t-e/2,o=r+a;return new Fx(n,i,s,h,v,o)},kx=Nx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dx=Jn,Vx=tr,Yx=function(t,r,e,a,n){r===void 0&&(r=null),e===void 0&&(e=1),a===void 0&&(a=1),n===void 0&&(n=[]);for(var i=Dx(t,r),s,h,v,o,f,y,u,c,x,l=0;l<i.length;l+=3)s=i[l],h=i[l+1],v=i[l+2],o=t[s*2]*e,f=t[s*2+1]*a,y=t[h*2]*e,u=t[h*2+1]*a,c=t[v*2]*e,x=t[v*2+1]*a,n.push(new Vx(o,f,y,u,c,x));return n},Ux=Yx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xx=tr,Zx=function(t,r,e,a){a===void 0&&(a=e);var n=t,i=r,s=t,h=r-a,v=t+e,o=r;return new Xx(n,i,s,h,v,o)},qx=Zx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hx=O,Wx=function(t,r){return r===void 0&&(r=new Hx),r.x=(t.x1+t.x2+t.x3)/3,r.y=(t.y1+t.y2+t.y3)/3,r},yi=Wx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qx=function(t,r,e){return t.x1+=r,t.y1+=e,t.x2+=r,t.y2+=e,t.x3+=r,t.y3+=e,t},ci=Qx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jx=yi,Kx=ci,Jx=function(t,r,e,a){a===void 0&&(a=jx);var n=a(t),i=r-n.x,s=e-n.y;return Kx(t,i,s)},tl=Jx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rl=gt;function Be(t,r,e,a){return t*a-r*e}var el=function(t,r){r===void 0&&(r=new rl);var e=t.x3,a=t.y3,n=t.x1-e,i=t.y1-a,s=t.x2-e,h=t.y2-a,v=2*Be(n,i,s,h),o=Be(i,n*n+i*i,h,s*s+h*h),f=Be(n,n*n+i*i,s,s*s+h*h);return r.x=e-o/v,r.y=a+f/v,r},al=el;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nl=ne,il=function(t,r){r===void 0&&(r=new nl);var e=t.x1,a=t.y1,n=t.x2,i=t.y2,s=t.x3,h=t.y3,v=n-e,o=i-a,f=s-e,y=h-a,u=v*(e+n)+o*(a+i),c=f*(e+s)+y*(a+h),x=2*(v*(h-i)-o*(s-n)),l,d;if(Math.abs(x)<1e-6){var M=Math.min(e,n,s),w=Math.min(a,i,h);l=(Math.max(e,n,s)-M)*.5,d=(Math.max(a,i,h)-w)*.5,r.x=M+l,r.y=w+d,r.radius=Math.sqrt(l*l+d*d)}else r.x=(y*u-o*c)/x,r.y=(v*c-f*u)/x,l=r.x-e,d=r.y-a,r.radius=Math.sqrt(l*l+d*d);return r},sl=il;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hl=tr,vl=function(t){return new hl(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},ol=vl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fl=gr,ul=function(t,r){return fl(t,r.x,r.y)},yl=ul;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cl=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},xl=cl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ll=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2&&t.x3===r.x3&&t.y3===r.y3},dl=ll;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ml=O;function Fe(t,r,e,a){var n=t-e,i=r-a,s=n*n+i*i;return Math.sqrt(s)}var Ml=function(t,r){r===void 0&&(r=new ml);var e=t.x1,a=t.y1,n=t.x2,i=t.y2,s=t.x3,h=t.y3,v=Fe(s,h,n,i),o=Fe(e,a,s,h),f=Fe(n,i,e,a),y=v+o+f;return r.x=(e*v+n*o+s*f)/y,r.y=(a*v+i*o+h*f)/y,r},xi=Ml;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ne=ft,wl=function(t){var r=t.getLineA(),e=t.getLineB(),a=t.getLineC();return Ne(r)+Ne(e)+Ne(a)},_l=wl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gl=function(t,r,e,a){var n=Math.cos(a),i=Math.sin(a),s=t.x1-r,h=t.y1-e;return t.x1=s*n-h*i+r,t.y1=s*i+h*n+e,s=t.x2-r,h=t.y2-e,t.x2=s*n-h*i+r,t.y2=s*i+h*n+e,s=t.x3-r,h=t.y3-e,t.x3=s*n-h*i+r,t.y3=s*i+h*n+e,t},ke=gl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bl=ke,$l=xi,Cl=function(t,r){var e=$l(t);return bl(t,e.x,e.y,r)},Tl=Cl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pl=ke,zl=function(t,r,e){return Pl(t,r.x,r.y,e)},pl=zl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N=tr;N.Area=Bx,N.BuildEquilateral=kx,N.BuildFromPolygon=Ux,N.BuildRight=qx,N.CenterOn=tl,N.Centroid=yi,N.CircumCenter=al,N.CircumCircle=sl,N.Clone=ol,N.Contains=gr,N.ContainsArray=xe,N.ContainsPoint=yl,N.CopyFrom=xl,N.Decompose=un,N.Equals=dl,N.GetPoint=oi,N.GetPoints=fi,N.InCenter=xi,N.Perimeter=_l,N.Offset=ci,N.Random=ui,N.Rotate=Tl,N.RotateAroundPoint=pl,N.RotateAroundXY=ke;var Ol=N;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Il=ot,El=Ia,De={Circle:Gh,Ellipse:zv,Intersects:qo,Line:P1,Mesh:cy,Point:jy,Polygon:W0,Rectangle:bx,Triangle:Ol};De=El(!1,De,Il);var Sl=De,Al=za(Sl);/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rl=function(t,r,e,a){return Math.atan2(a-r,e-t)},Ll=Rl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gl=function(t,r){return Math.atan2(r.y-t.y,r.x-t.x)},Bl=Gl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fl=function(t,r){return Math.atan2(r.x-t.x,r.y-t.y)},Nl=Fl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kl=function(t,r,e,a){return Math.atan2(e-t,a-r)},Dl=kl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rr=W,Vl=function(t){return t>Math.PI&&(t-=rr.PI2),Math.abs(((t+rr.TAU)%rr.PI2-rr.PI2)%rr.PI2)},Yl=Vl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ul=function(t){return t=t%(2*Math.PI),t>=0?t:t+2*Math.PI},li=Ul;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xl=function(t,r){return Math.random()*(r-t)+t},Ve=Xl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zl=Ve,ql=function(){return Zl(-Math.PI,Math.PI)},Hl=ql;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wl=Ve,Ql=function(){return Wl(-180,180)},jl=Ql;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kl=li,Jl=function(t){return Kl(t+Math.PI)},td=Jl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ye=W,rd=function(t,r,e){return e===void 0&&(e=.05),t===r||(Math.abs(r-t)<=e||Math.abs(r-t)>=Ye.PI2-e?t=r:(Math.abs(r-t)>Math.PI&&(r<t?r+=Ye.PI2:r-=Ye.PI2),r>t?t+=e:r<t&&(t-=e))),t},ed=rd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ad=function(t,r){var e=r-t;if(e===0)return 0;var a=Math.floor((e- -180)/360);return e-a*360},nd=ad;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var id=pr,sd=function(t){return id(t,-Math.PI,Math.PI)},hd=sd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vd=pr,od=function(t){return vd(t,-180,180)},fd=od;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ud={Between:Ll,BetweenPoints:Bl,BetweenPointsY:Nl,BetweenY:Dl,CounterClockwise:Yl,Normalize:li,Random:Hl,RandomDegrees:jl,Reverse:td,RotateTo:ed,ShortestBetween:nd,Wrap:hd,WrapDegrees:fd};/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yd=function(t,r){var e=t.x-r.x,a=t.y-r.y;return e*e+a*a},cd=yd;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xd=function(t,r,e,a){return Math.max(Math.abs(t-e),Math.abs(r-a))},ld=xd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dd=function(t,r,e,a,n){return n===void 0&&(n=2),Math.sqrt(Math.pow(e-t,n)+Math.pow(a-r,n))},md=dd;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Md=function(t,r,e,a){return Math.abs(t-e)+Math.abs(r-a)},wd=Md;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _d=function(t,r,e,a){var n=t-e,i=r-a;return n*n+i*i},gd=_d;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bd={Between:Wa,BetweenPoints:dn,BetweenPointsSquared:cd,Chebyshev:ld,Power:md,Snake:wd,Squared:gd};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $d={Back:mn,Bounce:Mn,Circular:wn,Cubic:_n,Elastic:gn,Expo:bn,Linear:$n,Quadratic:Cn,Quartic:Tn,Quintic:Pn,Sine:zn,Stepped:pn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cd=function(t,r){return r===void 0&&(r=1e-4),Math.ceil(t-r)},Td=Cd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pd=function(t,r){return r===void 0&&(r=1e-4),Math.floor(t+r)},zd=Pd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pd=function(t,r,e){return e===void 0&&(e=1e-4),t>r-e},Od=pd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Id=function(t,r,e){return e===void 0&&(e=1e-4),t<r+e},Ed=Id;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sd={Ceil:Td,Equal:ka,Floor:zd,GreaterThan:Od,LessThan:Ed};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ad=function(t){if(t===0)return 1;for(var r=t;--t;)r*=t;return r},di=Ad;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ue=di,Rd=function(t,r){return Ue(t)/Ue(r)/Ue(t-r)},mi=Rd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ld=mi,Gd=function(t,r){for(var e=0,a=t.length-1,n=0;n<=a;n++)e+=Math.pow(1-r,a-n)*Math.pow(r,n)*t[n]*Ld(a,n);return e},Bd=Gd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fd=function(t,r,e,a,n){var i=(a-r)*.5,s=(n-e)*.5,h=t*t,v=t*h;return(2*e-2*a+i+s)*v+(-3*e+3*a-2*i-s)*h+i*t+e},Mi=Fd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fr=Mi,Nd=function(t,r){var e=t.length-1,a=e*r,n=Math.floor(a);return t[0]===t[e]?(r<0&&(n=Math.floor(a=e*(1+r))),Fr(a-n,t[(n-1+e)%e],t[n],t[(n+1)%e],t[(n+2)%e])):r<0?t[0]-(Fr(-a,t[0],t[0],t[1],t[1])-t[0]):r>1?t[e]-(Fr(a-e,t[e],t[e],t[e-1],t[e-1])-t[e]):Fr(a-n,t[n?n-1:0],t[n],t[e<n+1?e:n+1],t[e<n+2?e:n+2])},kd=Nd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Dd(t,r){var e=1-t;return e*e*e*r}function Vd(t,r){var e=1-t;return 3*e*e*t*r}function Yd(t,r){return 3*(1-t)*t*t*r}function Ud(t,r){return t*t*t*r}var Xd=function(t,r,e,a,n){return Dd(t,r)+Vd(t,e)+Yd(t,a)+Ud(t,n)},Zd=Xd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qd=function(t,r,e){return(r-t)*e+t},wi=qd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xe=wi,Hd=function(t,r){var e=t.length-1,a=e*r,n=Math.floor(a);return r<0?Xe(t[0],t[1],a):r>1?Xe(t[e],t[e-1],e-a):Xe(t[n],t[n+1>e?e:n+1],a-n)},Wd=Hd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Qd(t,r){var e=1-t;return e*e*r}function jd(t,r){return 2*(1-t)*t*r}function Kd(t,r){return t*t*r}var Jd=function(t,r,e,a){return Qd(t,r)+jd(t,e)+Kd(t,a)},t2=Jd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var r2=function(t,r,e){return t<=r?0:t>=e?1:(t=(t-r)/(e-r),t*t*(3-2*t))},_i=r2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var e2=_i,a2=function(t,r,e){return r+(e-r)*e2(t,0,1)},n2=a2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var i2=function(t,r,e){return t=Math.max(0,Math.min(1,(t-r)/(e-r))),t*t*t*(t*(t*6-15)+10)},gi=i2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s2=gi,h2=function(t,r,e){return r+(e-r)*s2(t,0,1)},v2=h2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var o2={Bezier:Bd,CatmullRom:kd,CubicBezier:Zd,Linear:Wd,QuadraticBezier:t2,SmoothStep:n2,SmootherStep:v2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var f2=function(t){var r=Math.log(t)/.6931471805599453;return 1<<Math.ceil(r)},u2=f2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y2=function(t,r){return t>0&&(t&t-1)===0&&r>0&&(r&r-1)===0},c2=y2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x2=function(t){return t>0&&(t&t-1)===0},l2=x2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var d2={GetNext:u2,IsSize:c2,IsValue:l2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var m2=function(t,r,e,a){return e===void 0&&(e=0),r===0?t:(t-=e,t=r*Math.ceil(t/r),a?(e+t)/r:e+t)},M2=m2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var w2=function(t,r,e,a){return e===void 0&&(e=0),r===0?t:(t-=e,t=r*Math.floor(t/r),a?(e+t)/r:e+t)},_2=w2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var g2=function(t,r,e,a){return e===void 0&&(e=0),r===0?t:(t-=e,t=r*Math.round(t/r),a?(e+t)/r:e+t)},b2=g2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $2={Ceil:M2,Floor:_2,To:b2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var C2=Y,T2=new C2({initialize:function(r){r===void 0&&(r=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],r&&this.init(r)},rnd:function(){var t=2091639*this.s0+this.c*23283064365386963e-26;return this.c=t|0,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var r,e=this.n;t=t.toString();for(var a=0;a<t.length;a++)e+=t.charCodeAt(a),r=.02519603282416938*e,e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296;return this.n=e,(e>>>0)*23283064365386963e-26},init:function(t){typeof t=="string"?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,!!t)for(var r=0;r<t.length&&t[r]!=null;r++){var e=t[r];this.s0-=this.hash(e),this.s0+=~~(this.s0<0),this.s1-=this.hash(e),this.s1+=~~(this.s1<0),this.s2-=this.hash(e),this.s2+=~~(this.s2<0)}},integer:function(){return this.rnd()*4294967296},frac:function(){return this.rnd()+(this.rnd()*2097152|0)*11102230246251565e-32},real:function(){return this.integer()+this.frac()},integerInRange:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},between:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},realInRange:function(t,r){return this.frac()*(r-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",r="";for(r=t="";t++<36;r+=~t%5|t*3&4?(t^15?8^this.frac()*(t^20?16:4):4).toString(16):"-");return r},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-.5)+.5)]},timestamp:function(t,r){return this.realInRange(t||9466848e5,r||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return typeof t=="string"&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var r=t.length-1,e=r;e>0;e--){var a=Math.floor(this.frac()*(e+1)),n=t[a];t[a]=t[e],t[e]=n}return t}}),P2=T2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var z2=function(t){for(var r=0,e=0;e<t.length;e++)r+=+t[e];return r/t.length},p2=z2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O2=function(t,r,e){r===void 0&&(r=0),e===void 0&&(e=10);var a=Math.pow(e,-r);return Math.ceil(t*a)/a},I2=O2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var E2=function(t,r){return Math.abs(t-r)},S2=E2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var A2=function(){},bi=A2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var It=ae,R2=Y,L2=Ht,G2=bi,$i=new L2,Ze=new R2({initialize:function t(r,e,a,n){r===void 0&&(r=0),e===void 0&&(e=0),a===void 0&&(a=0),n===void 0&&(n=t.DefaultOrder),this._x=r,this._y=e,this._z=a,this._order=n,this.onChangeCallback=G2},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback(this)}},set:function(t,r,e,a){return a===void 0&&(a=this._order),this._x=t,this._y=r,this._z=e,this._order=a,this.onChangeCallback(this),this},copy:function(t){return this.set(t.x,t.y,t.z,t.order)},setFromQuaternion:function(t,r,e){return r===void 0&&(r=this._order),e===void 0&&(e=!1),$i.fromQuat(t),this.setFromRotationMatrix($i,r,e)},setFromRotationMatrix:function(t,r,e){r===void 0&&(r=this._order),e===void 0&&(e=!1);var a=t.val,n=a[0],i=a[4],s=a[8],h=a[1],v=a[5],o=a[9],f=a[2],y=a[6],u=a[10],c=0,x=0,l=0,d=.99999;switch(r){case"XYZ":{x=Math.asin(It(s,-1,1)),Math.abs(s)<d?(c=Math.atan2(-o,u),l=Math.atan2(-i,n)):c=Math.atan2(y,v);break}case"YXZ":{c=Math.asin(-It(o,-1,1)),Math.abs(o)<d?(x=Math.atan2(s,u),l=Math.atan2(h,v)):x=Math.atan2(-f,n);break}case"ZXY":{c=Math.asin(It(y,-1,1)),Math.abs(y)<d?(x=Math.atan2(-f,u),l=Math.atan2(-i,v)):l=Math.atan2(h,n);break}case"ZYX":{x=Math.asin(-It(f,-1,1)),Math.abs(f)<d?(c=Math.atan2(y,u),l=Math.atan2(h,n)):l=Math.atan2(-i,v);break}case"YZX":{l=Math.asin(It(h,-1,1)),Math.abs(h)<d?(c=Math.atan2(-o,v),x=Math.atan2(-f,n)):x=Math.atan2(s,u);break}case"XZY":{l=Math.asin(-It(i,-1,1)),Math.abs(i)<d?(c=Math.atan2(y,v),x=Math.atan2(s,n)):c=Math.atan2(-o,u);break}}return this._x=c,this._y=x,this._z=l,this._order=r,e&&this.onChangeCallback(this),this}});Ze.RotationOrders=["XYZ","YXZ","ZXY","ZYX","YZX","XZY"],Ze.DefaultOrder="XYZ";var B2=Ze;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F2=function(t,r,e){r===void 0&&(r=0),e===void 0&&(e=10);var a=Math.pow(e,-r);return Math.floor(t*a)/a},N2=F2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k2=function(t,r){return t/r/1e3},D2=k2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V2=function(t){return t==parseFloat(t)?!(t%2):void 0},Y2=V2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U2=function(t){return t===parseFloat(t)?!(t%2):void 0},X2=U2;/**
 * @author       Greg McLean <GregDevProjects>
 * @copyright    2021 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Z2=function(t,r,e){return e===void 0&&(e=0),t.clone().lerp(r,e)},q2=Z2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H2=function(t,r,e){return Math.min(t+r,e)},W2=H2;/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Q2=function(t){var r=t.length;if(r===0)return 0;t.sort(function(a,n){return a-n});var e=Math.floor(r/2);return r%2===0?(t[e]+t[e-1])/2:t[e]},j2=Q2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var K2=function(t,r,e){return Math.max(t-r,e)},J2=K2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tm=function(t,r,e,a){e===void 0&&(e=r+1);var n=(t-r)/(e-r);return n>1?a!==void 0?(n=(a-t)/(a-e),n<0&&(n=0)):n=1:n<0&&(n=0),n},rm=tm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var em=W,am=function(t){return t*em.RAD_TO_DEG},nm=am;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var im=function(t,r){r===void 0&&(r=1);var e=Math.random()*2*Math.PI;return t.x=Math.cos(e)*r,t.y=Math.sin(e)*r,t},sm=im;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hm=function(t,r){r===void 0&&(r=1);var e=Math.random()*2*Math.PI,a=Math.random()*2-1,n=Math.sqrt(1-a*a)*r;return t.x=Math.cos(e)*n,t.y=Math.sin(e)*n,t.z=a*r,t},vm=hm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var om=function(t,r){return r===void 0&&(r=1),t.x=(Math.random()*2-1)*r,t.y=(Math.random()*2-1)*r,t.z=(Math.random()*2-1)*r,t.w=(Math.random()*2-1)*r,t},fm=om;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var um=function(t,r){var e=t.x,a=t.y;return t.x=e*Math.cos(r)-a*Math.sin(r),t.y=e*Math.sin(r)+a*Math.cos(r),t},ym=um;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cm=function(t,r,e,a){var n=Math.cos(a),i=Math.sin(a),s=t.x-r,h=t.y-e;return t.x=s*n-h*i+r,t.y=s*i+h*n+e,t},xm=cm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lm=function(t,r,e,a,n){var i=a+Math.atan2(t.y-e,t.x-r);return t.x=r+n*Math.cos(i),t.y=e+n*Math.sin(i),t},dm=lm;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mm=function(t,r,e,a,n){return t.x=r+n*Math.cos(a),t.y=e+n*Math.sin(a),t},Mm=mm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wm=function(t){return t>0?Math.ceil(t):Math.floor(t)},_m=wm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gm=function(t,r,e){r===void 0&&(r=0),e===void 0&&(e=10);var a=Math.pow(e,-r);return Math.round(t*a)/a},bm=gm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $m=function(t,r,e,a){r===void 0&&(r=1),e===void 0&&(e=1),a===void 0&&(a=1),a*=Math.PI/t;for(var n=[],i=[],s=0;s<t;s++)e-=r*a,r+=e*a,n[s]=e,i[s]=r;return{sin:i,cos:n,length:t}},Cm=$m;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tm=gt,Pm=function(t,r,e,a){a===void 0&&(a=new Tm);var n=0,i=0,s=r*e;return t>0&&t<=s&&(t>r-1?(i=Math.floor(t/r),n=t-i*r):n=t),a.set(n,i)},zm=Pm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pm=gt,Om=function(t,r,e,a,n,i,s,h){h===void 0&&(h=new pm);var v=Math.sin(n),o=Math.cos(n),f=o*i,y=v*i,u=-v*s,c=o*s,x=1/(f*c+u*-y);return h.x=c*x*t+-u*x*r+(a*u-e*c)*x,h.y=f*x*r+-y*x*t+(-a*f+e*y)*x,h},Im=Om;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Em=function(t,r,e){return Math.abs(t-r)<=e},Sm=Em;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Am=Y,Ci=new Am({initialize:function(r){this.val=new Float32Array(9),r?this.copy(r):this.identity()},clone:function(){return new Ci(this)},set:function(t){return this.copy(t)},copy:function(t){var r=this.val,e=t.val;return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],this},fromMat4:function(t){var r=t.val,e=this.val;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[4],e[4]=r[5],e[5]=r[6],e[6]=r[8],e[7]=r[9],e[8]=r[10],this},fromArray:function(t){var r=this.val;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,r=t[1],e=t[2],a=t[5];return t[1]=t[3],t[2]=t[6],t[3]=r,t[5]=t[7],t[6]=e,t[7]=a,this},invert:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8],f=o*i-s*v,y=-o*n+s*h,u=v*n-i*h,c=r*f+e*y+a*u;return c?(c=1/c,t[0]=f*c,t[1]=(-o*e+a*v)*c,t[2]=(s*e-a*i)*c,t[3]=y*c,t[4]=(o*r-a*h)*c,t[5]=(-s*r+a*n)*c,t[6]=u*c,t[7]=(-v*r+e*h)*c,t[8]=(i*r-e*n)*c,this):null},adjoint:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8];return t[0]=i*o-s*v,t[1]=a*v-e*o,t[2]=e*s-a*i,t[3]=s*h-n*o,t[4]=r*o-a*h,t[5]=a*n-r*s,t[6]=n*v-i*h,t[7]=e*h-r*v,t[8]=r*i-e*n,this},determinant:function(){var t=this.val,r=t[0],e=t[1],a=t[2],n=t[3],i=t[4],s=t[5],h=t[6],v=t[7],o=t[8];return r*(o*i-s*v)+e*(-o*n+s*h)+a*(v*n-i*h)},multiply:function(t){var r=this.val,e=r[0],a=r[1],n=r[2],i=r[3],s=r[4],h=r[5],v=r[6],o=r[7],f=r[8],y=t.val,u=y[0],c=y[1],x=y[2],l=y[3],d=y[4],M=y[5],w=y[6],m=y[7],_=y[8];return r[0]=u*e+c*i+x*v,r[1]=u*a+c*s+x*o,r[2]=u*n+c*h+x*f,r[3]=l*e+d*i+M*v,r[4]=l*a+d*s+M*o,r[5]=l*n+d*h+M*f,r[6]=w*e+m*i+_*v,r[7]=w*a+m*s+_*o,r[8]=w*n+m*h+_*f,this},translate:function(t){var r=this.val,e=t.x,a=t.y;return r[6]=e*r[0]+a*r[3]+r[6],r[7]=e*r[1]+a*r[4]+r[7],r[8]=e*r[2]+a*r[5]+r[8],this},rotate:function(t){var r=this.val,e=r[0],a=r[1],n=r[2],i=r[3],s=r[4],h=r[5],v=Math.sin(t),o=Math.cos(t);return r[0]=o*e+v*i,r[1]=o*a+v*s,r[2]=o*n+v*h,r[3]=o*i-v*e,r[4]=o*s-v*a,r[5]=o*h-v*n,this},scale:function(t){var r=this.val,e=t.x,a=t.y;return r[0]=e*r[0],r[1]=e*r[1],r[2]=e*r[2],r[3]=a*r[3],r[4]=a*r[4],r[5]=a*r[5],this},fromQuat:function(t){var r=t.x,e=t.y,a=t.z,n=t.w,i=r+r,s=e+e,h=a+a,v=r*i,o=r*s,f=r*h,y=e*s,u=e*h,c=a*h,x=n*i,l=n*s,d=n*h,M=this.val;return M[0]=1-(y+c),M[3]=o+d,M[6]=f-l,M[1]=o-d,M[4]=1-(v+c),M[7]=u+x,M[2]=f+l,M[5]=u-x,M[8]=1-(v+y),this},normalFromMat4:function(t){var r=t.val,e=this.val,a=r[0],n=r[1],i=r[2],s=r[3],h=r[4],v=r[5],o=r[6],f=r[7],y=r[8],u=r[9],c=r[10],x=r[11],l=r[12],d=r[13],M=r[14],w=r[15],m=a*v-n*h,_=a*o-i*h,g=a*f-s*h,b=n*o-i*v,I=n*f-s*v,S=i*f-s*o,P=y*d-u*l,z=y*M-c*l,T=y*w-x*l,E=u*M-c*d,$=u*w-x*d,L=c*w-x*M,C=m*L-_*$+g*E+b*T-I*z+S*P;return C?(C=1/C,e[0]=(v*L-o*$+f*E)*C,e[1]=(o*T-h*L-f*z)*C,e[2]=(h*$-v*T+f*P)*C,e[3]=(i*$-n*L-s*E)*C,e[4]=(a*L-i*T+s*z)*C,e[5]=(n*T-a*$-s*P)*C,e[6]=(d*S-M*I+w*b)*C,e[7]=(M*g-l*S-w*_)*C,e[8]=(l*I-d*g+w*m)*C,this):null}}),Ti=Ci;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rm=Y,Lm=Ti,Gm=bi,qe=at,Pi=1e-6,zi=new Int8Array([1,2,0]),Et=new Float32Array([0,0,0]),Bm=new qe(1,0,0),Fm=new qe(0,1,0),ct=new qe,pi=new Lm,Nm=new Rm({initialize:function(r,e,a,n){this.onChangeCallback=Gm,this.set(r,e,a,n)},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback(this)}},copy:function(t){return this.set(t)},set:function(t,r,e,a,n){return n===void 0&&(n=!0),typeof t=="object"?(this._x=t.x||0,this._y=t.y||0,this._z=t.z||0,this._w=t.w||0):(this._x=t||0,this._y=r||0,this._z=e||0,this._w=a||0),n&&this.onChangeCallback(this),this},add:function(t){return this._x+=t.x,this._y+=t.y,this._z+=t.z,this._w+=t.w,this.onChangeCallback(this),this},subtract:function(t){return this._x-=t.x,this._y-=t.y,this._z-=t.z,this._w-=t.w,this.onChangeCallback(this),this},scale:function(t){return this._x*=t,this._y*=t,this._z*=t,this._w*=t,this.onChangeCallback(this),this},length:function(){var t=this.x,r=this.y,e=this.z,a=this.w;return Math.sqrt(t*t+r*r+e*e+a*a)},lengthSq:function(){var t=this.x,r=this.y,e=this.z,a=this.w;return t*t+r*r+e*e+a*a},normalize:function(){var t=this.x,r=this.y,e=this.z,a=this.w,n=t*t+r*r+e*e+a*a;return n>0&&(n=1/Math.sqrt(n),this._x=t*n,this._y=r*n,this._z=e*n,this._w=a*n),this.onChangeCallback(this),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var e=this.x,a=this.y,n=this.z,i=this.w;return this.set(e+r*(t.x-e),a+r*(t.y-a),n+r*(t.z-n),i+r*(t.w-i))},rotationTo:function(t,r){var e=t.x*r.x+t.y*r.y+t.z*r.z;return e<-.999999?(ct.copy(Bm).cross(t).length()<Pi&&ct.copy(Fm).cross(t),ct.normalize(),this.setAxisAngle(ct,Math.PI)):e>.999999?this.set(0,0,0,1):(ct.copy(t).cross(r),this._x=ct.x,this._y=ct.y,this._z=ct.z,this._w=1+e,this.normalize())},setAxes:function(t,r,e){var a=pi.val;return a[0]=r.x,a[3]=r.y,a[6]=r.z,a[1]=e.x,a[4]=e.y,a[7]=e.z,a[2]=-t.x,a[5]=-t.y,a[8]=-t.z,this.fromMat3(pi).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(t,r){r=r*.5;var e=Math.sin(r);return this.set(e*t.x,e*t.y,e*t.z,Math.cos(r))},multiply:function(t){var r=this.x,e=this.y,a=this.z,n=this.w,i=t.x,s=t.y,h=t.z,v=t.w;return this.set(r*v+n*i+e*h-a*s,e*v+n*s+a*i-r*h,a*v+n*h+r*s-e*i,n*v-r*i-e*s-a*h)},slerp:function(t,r){var e=this.x,a=this.y,n=this.z,i=this.w,s=t.x,h=t.y,v=t.z,o=t.w,f=e*s+a*h+n*v+i*o;f<0&&(f=-f,s=-s,h=-h,v=-v,o=-o);var y=1-r,u=r;if(1-f>Pi){var c=Math.acos(f),x=Math.sin(c);y=Math.sin((1-r)*c)/x,u=Math.sin(r*c)/x}return this.set(y*e+u*s,y*a+u*h,y*n+u*v,y*i+u*o)},invert:function(){var t=this.x,r=this.y,e=this.z,a=this.w,n=t*t+r*r+e*e+a*a,i=n?1/n:0;return this.set(-t*i,-r*i,-e*i,a*i)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(t){t*=.5;var r=this.x,e=this.y,a=this.z,n=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s+n*i,e*s+a*i,a*s-e*i,n*s-r*i)},rotateY:function(t){t*=.5;var r=this.x,e=this.y,a=this.z,n=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s-a*i,e*s+n*i,a*s+r*i,n*s-e*i)},rotateZ:function(t){t*=.5;var r=this.x,e=this.y,a=this.z,n=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s+e*i,e*s-r*i,a*s+n*i,n*s-a*i)},calculateW:function(){var t=this.x,r=this.y,e=this.z;return this.w=-Math.sqrt(1-t*t-r*r-e*e),this},setFromEuler:function(t,r){var e=t.x/2,a=t.y/2,n=t.z/2,i=Math.cos(e),s=Math.cos(a),h=Math.cos(n),v=Math.sin(e),o=Math.sin(a),f=Math.sin(n);switch(t.order){case"XYZ":{this.set(v*s*h+i*o*f,i*o*h-v*s*f,i*s*f+v*o*h,i*s*h-v*o*f,r);break}case"YXZ":{this.set(v*s*h+i*o*f,i*o*h-v*s*f,i*s*f-v*o*h,i*s*h+v*o*f,r);break}case"ZXY":{this.set(v*s*h-i*o*f,i*o*h+v*s*f,i*s*f+v*o*h,i*s*h-v*o*f,r);break}case"ZYX":{this.set(v*s*h-i*o*f,i*o*h+v*s*f,i*s*f-v*o*h,i*s*h+v*o*f,r);break}case"YZX":{this.set(v*s*h+i*o*f,i*o*h+v*s*f,i*s*f-v*o*h,i*s*h-v*o*f,r);break}case"XZY":{this.set(v*s*h-i*o*f,i*o*h-v*s*f,i*s*f+v*o*h,i*s*h+v*o*f,r);break}}return this},setFromRotationMatrix:function(t){var r=t.val,e=r[0],a=r[4],n=r[8],i=r[1],s=r[5],h=r[9],v=r[2],o=r[6],f=r[10],y=e+s+f,u;return y>0?(u=.5/Math.sqrt(y+1),this.set((o-h)*u,(n-v)*u,(i-a)*u,.25/u)):e>s&&e>f?(u=2*Math.sqrt(1+e-s-f),this.set(.25*u,(a+i)/u,(n+v)/u,(o-h)/u)):s>f?(u=2*Math.sqrt(1+s-e-f),this.set((a+i)/u,.25*u,(h+o)/u,(n-v)/u)):(u=2*Math.sqrt(1+f-e-s),this.set((n+v)/u,(h+o)/u,.25*u,(i-a)/u)),this},fromMat3:function(t){var r=t.val,e=r[0]+r[4]+r[8],a;if(e>0)a=Math.sqrt(e+1),this.w=.5*a,a=.5/a,this._x=(r[7]-r[5])*a,this._y=(r[2]-r[6])*a,this._z=(r[3]-r[1])*a;else{var n=0;r[4]>r[0]&&(n=1),r[8]>r[n*3+n]&&(n=2);var i=zi[n],s=zi[i];a=Math.sqrt(r[n*3+n]-r[i*3+i]-r[s*3+s]+1),Et[n]=.5*a,a=.5/a,Et[i]=(r[i*3+n]+r[n*3+i])*a,Et[s]=(r[s*3+n]+r[n*3+s])*a,this._x=Et[0],this._y=Et[1],this._z=Et[2],this._w=(r[s*3+i]-r[i*3+s])*a}return this.onChangeCallback(this),this}}),Oi=Nm;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var km=at,Dm=Ht,Vm=Oi,Ii=new Dm,Ei=new Vm,Ym=new km,Um=function(t,r,e){return Ei.setAxisAngle(r,e),Ii.fromRotationTranslation(Ei,Ym.set(0,0,0)),t.transformMat4(Ii)},Xm=Um;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zm=W,qm=Ia,He={Angle:ud,Distance:bd,Easing:$d,Fuzzy:Sd,Interpolation:o2,Pow2:d2,Snap:$2,RandomDataGenerator:P2,Average:p2,Bernstein:mi,Between:vi,CatmullRom:Mi,CeilTo:I2,Clamp:ae,DegToRad:hi,Difference:S2,Euler:B2,Factorial:di,FloatBetween:Ve,FloorTo:N2,FromPercent:Dt,GetSpeed:D2,IsEven:Y2,IsEvenStrict:X2,Linear:wi,LinearXY:q2,MaxAdd:W2,Median:j2,MinSub:J2,Percent:rm,RadToDeg:nm,RandomXY:sm,RandomXYZ:vm,RandomXYZW:fm,Rotate:ym,RotateAround:xm,RotateAroundDistance:dm,RotateTo:Mm,RoundAwayFromZero:_m,RoundTo:bm,SinCosTableGenerator:Cm,SmootherStep:gi,SmoothStep:_i,ToXY:zm,TransformXY:Im,Within:Sm,Wrap:pr,Vector2:gt,Vector3:at,Vector4:ue,Matrix3:Ti,Matrix4:Ht,Quaternion:Oi,RotateVec3:Xm};He=qm(!1,He,Zm);var Hm=He,We=za(Hm);function Si(t,r){let e=new Al.Point(0,0),a=We.Angle.BetweenPoints(e,new We.Vector2(t,r));return We.RadToDeg(a)}class Wm{constructor(r){F(this,"world");this.world=r}run(r){this.world.entities.filter(a=>a instanceof ga).forEach(a=>{a.x+=a.velocityX*r,a.y+=a.velocityY*r,(a.x<0||a.x>this.world.bounds.width)&&(a.velocityX=-a.velocityX,a.angle=st(Si(a.velocityX,a.velocityY))),(a.y<0||a.y>this.world.bounds.height)&&(a.velocityY=-a.velocityY,a.angle=st(Si(a.velocityX,a.velocityY)))})}}Ji(t=>new Wm(t))})();

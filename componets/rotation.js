AFRAME.registerComponent("trot",{
    schema:{
      rotation_speed:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "a"){
                if(this.data.rotation_speed <0.1){
                    this.data.rotation_speed= this.data.rotation_speed+0.01
                }
            }
            if(e.key === "d"){
                if(this.data.rotation_speed >-0.1){
                    this.data.rotation_speed= this.data.rotation_speed-0.01
                }
            }
        })
    },
    tick:function(){
        map_rot = this.el.getAttribute("rotation")
        map_rot.y+= this.data.rotation_speed
        this.el.setAttribute("rotation",{
            x:map_rot.x,
            y:map_rot.y,
            z:map_rot.z
        })
    },
    
})
AFRAME.registerComponent("prot",{
    schema:{
      rotation_speed:{type:"number",default:0},
      ascent_speed:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.rotation_speed = this.el.getAttribute("rotation");
            this.data.ascent_speed = this.el.getAttribute("position");
            var airplane_rot = this.data.rotation_speed;
            var airplane_pos = this.data.ascent_speed;
            //left right 
            if(e.key === "a"){
                if(this.data.rotation_speed <0.1){
                    this.data.rotation_speed= this.data.rotation_speed+0.01
                }
            }
            if(e.key === "d"){
                if(this.data.rotation_speed >-0.1){
                    this.data.rotation_speed= this.data.rotation_speed-0.01
                }
            }
            //control the attributes with the Arrow Keys
            if (e.key === "a") {
                if (airplane_rot.x < 10) {
                airplane_rot.x = airplane_rot.x + 0.5;
                this.el.setAttribute("rotation", airplane_rot);
                }
            }
            if (e.key === "d") {
                if (airplane_rot.x > -10) {
                airplane_rot.x = airplane_rot.x-0.5;
                this.el.setAttribute("rotation", airplane_rot);
                }
            }
            if (e.key === "w") {
                if (airplane_rot.z < 20) {
                airplane_rot.z =airplane_rot.z + 0.5;
                this.el.setAttribute("rotation", airplane_rot);
                }
                if (airplane_pos.y < 2) {
                airplane_pos.y = airplane_pos.y +0.01;
                this.el.setAttribute("position", airplane_pos);
                }
            }
            if (e.key === "s") {
                if (airplane_rot.z > -10) {
                airplane_rot.z =airplane_rot.z - 0.5;
                this.el.setAttribute("rotation", airplane_rot);
                }
                if (airplane_pos.y > -2) {
                airplane_pos.y = airplane_pos.y - 0.01;
                this.el.setAttribute("position", airplane_pos);
                }
            }
        })
    },
    tick:function(){
        map_rot = this.el.getAttribute("rotation")
        map_rot.y+= this.data.rotation_speed
        this.el.setAttribute("rotation",{
            x:map_rot.x,
            y:map_rot.y,
            z:map_rot.z
        })
    },
    
})


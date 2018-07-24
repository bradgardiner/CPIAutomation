<template>
  <div id="upload" style="padding-top: 8%; ">
    <div class="wrap">
      <div  class="sections">
        <div class="section">
          <div class="label">Full Name</div>
          <input type="text" v-model="name"/>
        </div>
        <div class="section">
          <div class="label">Email Address</div>
          <input type="text" v-model="email"/>
        </div>
        <div class="section">
          <div class="label"> Description of request:</div>
          <textarea rows="4" v-model="desc"></textarea>
        </div>
        <div class="section">
          <div class="label"> Upload File:</div>
          <input type="file" @change="setFile">
        </div>
        <div class="section center" v-show="showButton">
            <div class="btn submit" v-on:click="submit()">SUBMIT</div>
            <div class="warning">{{message}}</div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default{
  name: 'upload',
  data(){
    return{
      name:'',
      email:'',
      desc:'',
      drawing:'',
      showButton: true
    }
  },
  methods:{
    setFile: function (event) { this.drawing = event.target.files[0] },
    submit: function() {
      const required = ['name', 'email', 'desc', 'drawing']
      const valid = required.every((elem, index, array) => {
        return this[elem]
      })
      if(!valid){
        this.message = "Please fill in ALL fields"
      } else{
        this.showButton=false;
        const data = new FormData();
        data.append('name', this.name);
        data.append('email', this.email);
        data.append('desc', this.desc);
        data.append('drawing', this.drawing);
      }
    }
  }
}

</script>

<style>


.warning {
  margin-top:12px;
  font-weight:bold;
  position:absolute;
  margin-top:60px;
}
.sections {
  width:100%;
  display:flex;
  flex-direction:column;
}
.section {
  margin-bottom:12px;
  width:500px;
  max-width:600px;
  display:flex;
  flex-direction:column;
}
.section.center {
  align-items:center;
}
.label {
  line-height:140%;
  font-size:20px;
  color: grey;
  margin-bottom:12px;
  font-weight:bold;
}
.submit {
  font-size:20px;
  font-weight:bold;
  text-align:center;
  padding: 8px 24px;
}
input, select, textarea {
  border:1px solid grey;
  border-radius:8px;
  background-color: rgba(17, 26, 52, 0.6);
  padding:12px;
  color:white;
  font-size:18px;
}
button:hover {
  cursor: pointer;
}
select {
  height:47px;
}
h1 {
  font-size:40px;
  font-weight:bold;
  margin-bottom:0;
}

hr {
  border:1px solid rgba(0,0,0,0.05);
}
p {
  padding:0 8px;
}
a {
  color:#fff;
  text-decoration:none;
}
.btn {
  transition:all 0.15s ease-in-out;
}
.btn:hover {
  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(-8px);
}
</style>

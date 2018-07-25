<template>
  <div id="cont" style="margin-left:15%; margin-right:15%; font-size: 20px">
      <div class="wrap" >
        <div class="columns">
          <div class="col">
            <h2>Customer Service</h2>
            <p> Our excellent customer service department is happy to help you on one of our two locations, over the phone or by email. </p>
          </div>
          <div class="col">
            <h2>For Business</h2>
            <p> Our friendly and knowlagable sales representatives will travel anywhere in southern Ontario to help you get exactly what you need. As well as our skilled engineers can work with you to help design and manufacture a product that best suits you.</p>
          </div>
        </div>
        <div class="columns">
          <div class="col">
            <h2>Hours of Operation</h2>
            <p>We are open 5 days a week (Monday to Friday) between the hours of 8:00 am and 5:00 pm. For holiday schedules, please call or email.</p>
          </div>
          <div class="col">
            <h2> Services </h2>
            <p> CPI services the Greater Toronto Area (GTA), the surrounding region of Southern Ontario, Canada, and beyond providing pneumatics, hydraulics, automation, aluminum extrusion, and control design and production services. Our products can be found both locally in the Toronto area and globally.</p>
          </div>
        </div>
        <div class="columns">
          <div class="col">
            <h3> Head Office</h3>
            <p>CPI is located in Mississauga, Ontario, Canada just a short drive west of Toronto proper. The nearest major intersection is Eglinton and Tomken. Operations at the Mississauga facility include:</p>
            <ul>
              <li> Sales and Ordering</li>
              <li> Component pick up</li>
              <li>Design and Engineering</li>
              <li>Manufacturing and Assembly</li>
              <li> Hydraulic and Pneumatic Service and Repair</li>
            </ul>
          </div>
          <div class="col">
            <h3>Kitchener Branch Office</h3>
            <p> For your convenience, we also maintain a branch office to service western Ontario. Services provided at the Kitchener office include:</p>
            <ul>
              <li> Sales and Ordering</li>
              <li>Hydraulic and Pneumatic service and Repair</li>
              <li>Small parts pick-up</li>
            </ul>
          </div>
        </div>
        <div class="columns" style="padding: 2%;">
          <div class="col">
            <div class="google-map" :id="mapName" style="padding-right:25%;">
              <GmapMap
                :center="{lat:43.6267149, lng:-79.6408304}"
                :zoom="14"
                map-type-id="terrain"
                style="width: 500px; height: 300px"
              >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              />
              </GmapMap>
            </div>
          </div>
          <div class="col">
            <div class="google-map" :id="mapName" style="padding-left:25%;">
              <GmapMap
                :center="{lat:43.4011699, lng:-80.4762357}"
                :zoom="14"
                map-type-id="terrain"
                style="width: 500px; height: 300px"
              >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              />
              </GmapMap>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default{
  name: 'contact',
  props: ['name'],
  data: function () {
    return {
    }
  },
}
</script>

<style scoped>

  .wrap{
    display:flex;
    flex-wrap:wrap;
    align-items: top;

  }

  .columns{
    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
    border-bottom: 1px solid grey;
  }

</style>

<template>
<!-- 
  <div class="aos-all">
    <div data-id="1" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="2" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="3" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="4" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="5" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="6" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="7" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="8" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="9" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="10" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="11" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="12" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="13" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="14" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="15" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="16" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="17" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="18" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="19" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="20" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="21" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="22" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="23" class="aos-item" data-aos="fadeInUp"></div>
    <div data-id="24" class="aos-item" data-aos="fadeInUp"></div>
  </div> -->


  <div class="aos-all">
    <div data-id="1" class="aos-item" data-aos="fade-up" data-aos-once="true"></div>
    <div data-id="2" class="aos-item" data-aos="fade-down"></div>
    <div data-id="3" class="aos-item" data-aos="zoom-out-down"></div>
    <div data-id="4" class="aos-item" data-aos="flip-down"></div>
    <div data-id="5" class="aos-item" data-aos="flip-up" data-aos-once="true"></div>
    <div data-id="6" class="aos-item" data-aos="fade-down"></div>
    <div data-id="7" class="aos-item" data-aos="fade-in"></div>
    <div data-id="8" class="aos-item" data-aos="fade-down"></div>
    <div data-id="9" class="aos-item" data-aos="fade-in" data-aos-once="true"></div>
    <div data-id="10" class="aos-item" data-aos="fade-down"></div>
    <div data-id="11" class="aos-item" data-aos="fade-up" data-aos-once="true"></div>
    <div data-id="12" class="aos-item" data-aos="fade-down"></div>
    <div data-id="13" class="aos-item" data-aos="fade-in" data-aos-once="true"></div>
    <div data-id="14" class="aos-item" data-aos="fade-up"></div>
    <div data-id="15" class="aos-item" data-aos="fade-in"></div>
    <div data-id="16" class="aos-item" data-aos="fade-up"></div>
    <div data-id="17" class="aos-item" data-aos="fade-down" data-aos-once="true"></div>
    <div data-id="18" class="aos-item" data-aos="fade-up"></div>
    <div data-id="19" class="aos-item" data-aos="zoom-out"></div>
    <div data-id="20" class="aos-item" data-aos="fade-up"></div>
    <div data-id="21" class="aos-item" data-aos="zoom-out" data-aos-once="true"></div>
  </div>

  <!-- <div class="aos-anchors">
    <div class="aos-anchors__lines"></div>
    <div class="aos-anchors__sidebar">
      <div data-id="1" data-aos="fade-up" data-aos-anchor="[data-anchor-id='1']" data-aos-anchor-placement="top-top">
        Anchor: 1
      </div>
      <div data-id="2" data-aos="fade-up" data-aos-anchor="[data-anchor-id='2']" data-aos-anchor-placement="center-top">
        Anchor: 2
      </div>
      <div data-id="3" data-aos="fade-up" data-aos-anchor="[data-anchor-id='3']" data-aos-anchor-placement="bottom-top">
        Anchor: 3
      </div>
      <div data-id="4" data-aos="fade-up" data-aos-anchor="[data-anchor-id='4']" data-aos-anchor-placement="top-center">
        Anchor: 4
      </div>
      <div data-id="5" data-aos="fade-up" data-aos-anchor="[data-anchor-id='5']" data-aos-anchor-placement="center-center">
        Anchor: 5
      </div>
      <div data-id="6" data-aos="fade-up" data-aos-anchor="[data-anchor-id='6']" data-aos-anchor-placement="bottom-center">
        Anchor: 6
      </div>
      <div data-id="7" data-aos="fade-up" data-aos-anchor="[data-anchor-id='7']" data-aos-anchor-placement="top-bottom">
        Anchor: 7
      </div>
      <div data-id="8" data-aos="fade-up" data-aos-anchor="[data-anchor-id='8']" data-aos-anchor-placement="center-bottom">
        Anchor: 8
      </div>
      <div data-id="9" data-aos="fade-up" data-aos-anchor="[data-anchor-id='9']" data-aos-anchor-placement="bottom-bottom">
        Anchor: 9
      </div>
    </div>
    <div class="aos-anchors__content">
      <div data-anchor-id="1" data-placement="top-top"></div>
      <div data-anchor-id="2" data-placement="center-top"></div>
      <div data-anchor-id="3" data-placement="bottom-top"></div>
      <div data-anchor-id="4" data-placement="top-center"></div>
      <div data-anchor-id="5" data-placement="center-center"></div>
      <div data-anchor-id="6" data-placement="bottom-center"></div>
      <div data-anchor-id="7" data-placement="top-bottom"></div>
      <div data-anchor-id="8" data-placement="center-bottom"></div>
      <div data-anchor-id="9" data-placement="bottom-bottom"></div>
    </div>
  </div> -->

  
</template>

<script lang="ts" setup>
import AOS from 'aos';
import { defineComponent, ref } from 'vue';
import 'aos/dist/aos.css'

AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
});
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

</script>

<style scoped>
  body {
    font-family: Helvetica,Tahoma;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  .scroll-counter {
    position: fixed;
    top: 0;
    right: 0;
    padding: 15px;
    color: white;
    background-color: rgba(0,0,0,0.4);
  }
  
  .aos-all {
    width: 1000px;
    max-width: 98%;
    margin: 50px auto;
  }
  
  .aos-item {
    display: inline-block;
    float: left;
    width: 100%;
    height: 300px;
    padding: 20px;
  }
  
  .aos-item::before {
    content: attr(data-id);
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    background: #1da4e2;
    line-height: 260px;
    text-align: center;
    color: #fff;
  }
  
  @media screen and (min-width: 420px) {
    .aos-item {
      width: 50%;
    }
  }
  
  @media screen and (min-width: 1024px) {
    .aos-item {
      width: 33%;
    }
  }
  
  .aos-anchors__lines {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 2px solid blue;
    border-bottom: 2px solid red;
  }
  
  .aos-anchors__lines::before {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: green;
  }
  
  .aos-anchors__sidebar {
    position: fixed;
    left: 0;
    top: 0;
  }
  
  .aos-anchors__sidebar > div {
    padding: 5px 10px;
    background: #f1f1f1;
  }
  
  .aos-anchors__content {
    width: 400px;
    margin: 50px auto;
  }
  
  .aos-anchors__content > div {
    position: relative;
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
    background: #f1f1f1;
    line-height: 300px;
    text-align: center;
    color: #333;
  }
  
  .aos-anchors__content > div::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
  }
  
  .aos-anchors__content > div::after {
    content: attr(data-anchor-id);
    position: relative;
    background-color: #f1f1f1;
  }
  
  .aos-anchors__content > div[data-placement$="-bottom"]::before {
    background-color: red;
  }
  
  .aos-anchors__content > div[data-placement$="-center"]::before {
    background-color: green;
  }
  
  .aos-anchors__content > div[data-placement$="-top"]::before {
    background-color: blue;
  }
  
  .aos-anchors__content > div[data-placement^="top-"]::before {
    top: 0;
  }
  
  .aos-anchors__content > div[data-placement^="center-"]::before {
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  .aos-anchors__content > div[data-placement^="bottom-"]::before {
    bottom: 0;
  }
</style>

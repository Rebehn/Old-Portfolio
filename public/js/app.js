"use strict";$(function(){function o(){e.show(),r.show()}function c(){e.hide(),r.hide()}$("#particles").particleground({dotColor:"#00471B",lineColor:"#00471B",lineWidth:1,particleRadius:5,proximity:90,maxSpeedX:.2,maxSpeedY:.2,parallaxMultiplier:8});var e=$(".shadeBox"),r=$(".projectInfoBox"),i=$(".closeProjectButton"),t=$("#projectCardOne"),l=$("#projectCardTwo"),n=$("#projectCardThree"),a=$("#projectCardFour");t.on("click",o),l.on("click",o),n.on("click",o),a.on("click",o),i.on("click",c)});
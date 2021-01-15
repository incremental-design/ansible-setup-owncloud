(()=>{"use strict";var e={n:n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};const n=require("cac");var t=e.n(n);const r=require("prompts");var o=e.n(r);const a=require("dotenv");var i=e.n(a);const c=require("do-wrapper");var s=e.n(c);var u,l=function(){function e(){this._name=""}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!1,configurable:!0}),e.prototype.setName=function(e){return this.name=e,this},e.prototype.provisionOn=function(e){switch(+e){case u.digitalOcean:return function(e){var n={name:"another",region:"nyc3",size:"s-1vcpu-1gb",image:"rancheros",ssh_keys:[27608986,28496457],backups:!1,ipv6:!0,private_networking:null,user_data:null,volumes:null,tags:[]};n=Object.assign(n,e);var t=function(){var e=process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN;if(null==e.length)throw"Digital Ocean Personal Access Token has not been set in `.env`. Cannot access digital ocean API";return e}();return new(s())(t).droplets.create(n).then((function(e){return e}))}({name:this.name});case u.aws:throw new Error("Sorry, I haven't written any code to provision rancher on AWS. If you want to add the code in, check out this project and go to src/provisionRancherOnDigitalOcean/RancherOSConfig.ts and modify the code.");default:throw new Error('${cloud} isn\'t a supported cloud provider. You must specify either "aws" or "digitalOcean".')}},e}();!function(e){e[e.digitalOcean=0]="digitalOcean",e[e.aws=1]="aws"}(u||(u={}));i().config(),t()().parse();var p,f,h,d,v=[{type:"text",name:"dropletName",message:"What do you want to name your droplet?",initial:"rancher"}],y=new l;p=void 0,f=void 0,d=function(){var e,n;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(t){switch(t.label){case 0:return[4,o()(v)];case 1:return e=t.sent(),[4,y.setName(e.dropletName).provisionOn(u.digitalOcean)];case 2:return n=t.sent(),console.log(n),[2]}}))},new((h=void 0)||(h=Promise))((function(e,n){function t(e){try{o(d.next(e))}catch(e){n(e)}}function r(e){try{o(d.throw(e))}catch(e){n(e)}}function o(n){var o;n.done?e(n.value):(o=n.value,o instanceof h?o:new h((function(e){e(o)}))).then(t,r)}o((d=d.apply(p,f||[])).next())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJjYWNcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwicHJvbXB0c1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwiZG8td3JhcHBlclwiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9uRGlnaXRhbE9jZWFuL1JhbmNoZXJPU0NvbmZpZy50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkLy4vc3JjL3Byb3Zpc2lvblJhbmNoZXJPbkRpZ2l0YWxPY2Vhbi9wcm92aXNpb25PbkRpZ2l0YWxPY2Vhbi50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkLy4vc3JjL3Byb3Zpc2lvblJhbmNoZXJPbkRpZ2l0YWxPY2Vhbi9nZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuLnRzIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZSIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyZXF1aXJlIiwiY2xvdWRQcm92aWRlcnMiLCJfbmFtZSIsInRoaXMiLCJuZXdOYW1lIiwic2V0TmFtZSIsIm5hbWUiLCJwcm92aXNpb25PbiIsImNsb3VkIiwiZGlnaXRhbE9jZWFuIiwiY29uZmlnT2JqZWN0IiwicmFuY2hlckluc3RhbmNlIiwicmVnaW9uIiwic2l6ZSIsImltYWdlIiwic3NoX2tleXMiLCJiYWNrdXBzIiwiaXB2NiIsInByaXZhdGVfbmV0d29ya2luZyIsInVzZXJfZGF0YSIsInZvbHVtZXMiLCJ0YWdzIiwiYXNzaWduIiwiYXV0aFRva2VuIiwicHJvY2VzcyIsImVudiIsIkRJR0lUQUxfT0NFQU5fUEVSU09OQUxfQUNDRVNTX1RPS0VOIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiZHJvcGxldHMiLCJjcmVhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJwcm92aXNpb25PbkRpZ2l0YWxPY2VhbiIsImF3cyIsIkVycm9yIiwicGFyc2UiLCJxdWVzdGlvbnMiLCJ0eXBlIiwibWVzc2FnZSIsImluaXRpYWwiLCJyYW5jaGVyQ29uZmlnIiwiUmFuY2hlck9TQ29uZmlnIiwiYW5zd2VycyIsImRyb3BsZXROYW1lIiwiZHJvcGxldCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJtQkFDQSxJQUFJQSxFQUFzQixDQ0ExQixFQUF5QkMsSUFDeEIsSUFBSUMsRUFBU0QsR0FBVUEsRUFBT0UsV0FDN0IsSUFBTUYsRUFBZ0IsUUFDdEIsSUFBTUEsRUFFUCxPQURBRCxFQUFvQkksRUFBRUYsRUFBUSxDQUFFRyxFQUFHSCxJQUM1QkEsR0NMUixFQUF3QixDQUFDSSxFQUFTQyxLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hQLEVBQW9CUyxFQUFFRixFQUFZQyxLQUFTUixFQUFvQlMsRUFBRUgsRUFBU0UsSUFDNUVFLE9BQU9DLGVBQWVMLEVBQVNFLEVBQUssQ0FBRUksWUFBWSxFQUFNQyxJQUFLTixFQUFXQyxNQ0ozRSxFQUF3QixDQUFDTSxFQUFLQyxJQUFTTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxJQ0FqRixNQUFNLEVBQStCSSxRQUFRLE8sYUNBN0MsTUFBTSxFQUErQkEsUUFBUSxXLGFDQTdDLE1BQU0sRUFBK0JBLFFBQVEsVSxhQ0E3QyxNQUFNLEVBQStCQSxRQUFRLGMsYUNJN0MsSUF3Q1lDLEVBeENaLGFBR0UsYUFGUSxLQUFBQyxNQUFnQixHQXFDMUIsT0FqQ0Usc0JBQUksbUJBQUksQyxJQUFSLFdBQ0UsT0FBT0MsS0FBS0QsTyxJQUVkLFNBQVNFLEdBQ1BELEtBQUtELE1BQVFFLEcsZ0NBSWYsWUFBQUMsUUFBQSxTQUFRRCxHQUVOLE9BREFELEtBQUtHLEtBQU9GLEVBQ0xELE1BR1QsWUFBQUksWUFBQSxTQUFZQyxHQUNWLFFBQVNBLEdBTVAsS0FBS1AsRUFBZVEsYUFFbEIsT0M1QkQsU0FDTEMsR0FFQSxJQUFJQyxFQUEwQixDQUM1QkwsS0FBTSxVQUNOTSxPQUFRLE9BQ1JDLEtBQU0sY0FDTkMsTUFBTyxZQUNQQyxTQUFVLENBQUMsU0FBVSxVQUNyQkMsU0FBUyxFQUNUQyxNQUFNLEVBQ05DLG1CQUFvQixLQUNwQkMsVUFBVyxLQUNYQyxRQUFTLEtBQ1RDLEtBQU0sSUFHUlYsRUFBa0JwQixPQUFPK0IsT0FBT1gsRUFBaUJELEdBRWpELElBQU1hLEVDdEJPLFdBT2IsSUFBTUEsRUFBWUMsUUFBUUMsSUFBSUMsb0NBRTlCLEdBTG1EQyxNQUtoQkosRUFMTUssT0FNdkMsS0FBTSxrR0FFUixPQUFPTCxFRFVXLEdBR2xCLE9BRjRCLElBQUksSUFBSixDQUFpQkEsR0FHdkJNLFNBRWpCQyxPQUFPbkIsR0FDUG9CLE1BQUssU0FBQ0MsR0FDTCxPQUFPQSxLRENBQyxDQURNLENBQUUzQixLQUFNSCxLQUFLRyxPQUU1QixLQUFLTCxFQUFlaUMsSUFDbEIsTUFBTSxJQUFJQyxNQUNSLDhNQUVKLFFBQ0UsTUFBTSxJQUFJQSxNQUNSLGtHQUlWLEVBdENBLElBd0NBLFNBQVlsQyxHQUNWLG1DQUNBLGlCQUZGLENBQVlBLE1BQWMsS0dwQzFCLGFBRVksTUFDT21DLFFBRG5CLEksUUFVTUMsRUFBeUMsQ0FDN0MsQ0FDRUMsS0FBTSxPQUNOaEMsS0FBTSxjQUNOaUMsUUFBUyx5Q0FDVEMsUUFBUyxZQUlQQyxFQUFnQixJQUFJQyxFLE9BRXpCLEUsT0FBQSxFLEVBQUEsVyw2bENBQ2lCLFNBQU0sSUFBUUwsSSxPQUNkLE9BRFZNLEVBQVUsU0FDQSxHQUFNRixFQUNuQnBDLFFBQVFzQyxFQUFRQyxhQUNoQnJDLFlBQVlOLEVBQWVRLGUsY0FGeEJvQyxFQUFVLFNBR2hCQyxRQUFRQyxJQUFJRixHLHFCQUxiLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJjYWNcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwicHJvbXB0c1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZG8td3JhcHBlclwiKTs7IiwiaW1wb3J0IHtcbiAgcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4sXG4gIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSxcbn0gZnJvbSBcIi4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW5cIjtcbmV4cG9ydCBjbGFzcyBSYW5jaGVyT1NDb25maWcge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge30gLy9JJ20gbGVhdmluZyB0aGUgY29uc3RydWN0b3IgYmxhbmsgYmVjYXVzZSB3ZSdsbCBpbml0aWFsaXplIGFsbCB2YXJpYWJsZXMgd2l0aCBjaGFpbmFibGUgc2V0dGVyc1xuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmV3TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5ld05hbWU7XG4gICAgLy8gVE9ETzogc2FuaXRpemUgY2hhcmFjdGVycyB0aGF0IGRvbid0IGJlbG9uZyBpbiBkaWdpdGFsIG9jZWFuIGRyb3BsZXQgbmFtZXNcbiAgfVxuXG4gIHNldE5hbWUobmV3TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3Zpc2lvbk9uKGNsb3VkOiBjbG91ZFByb3ZpZGVycyk6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSB7XG4gICAgc3dpdGNoICgrY2xvdWQpIHtcbiAgICAgIC8qXG4gICAgICAgIGFyZ3VtZW50ICdjbG91ZCcgaGFzIHRvIGJlIGNhc3QgdG8gYSBudW1iZXIgaW4gb3JkZXIgdG8gYmUgY29tcGFyYWJsZSBpbiBhIHN3aXRjaCBzdGF0ZW1lbnQuXG4gICAgICAgIFRoaXMgd29ya3MgYmVjYXVzZSBlbnVtcyBhcmUgYWN0dWFsbHkgYSB0eXBlIG9mIG51bWJlciAuLi4gdGhlIG5hbWUgb2YgZWFjaCBlbnVtZXJhYmxlIHZhbHVlIGlzIGp1c3Qgc3ludGFjdGljIHN1Z2FyLlxuICAgICAgICBmb3IgbW9yZSBpbmZvIHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NDc0MzcvdHlwZXNjcmlwdC1lbnVtLXN3aXRjaC1ub3Qtd29ya2luZ1xuICAgICAgKi9cbiAgICAgIGNhc2UgY2xvdWRQcm92aWRlcnMuZGlnaXRhbE9jZWFuOlxuICAgICAgICBsZXQgY29uZmlnID0geyBuYW1lOiB0aGlzLm5hbWUgfTtcbiAgICAgICAgcmV0dXJuIHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuKGNvbmZpZyk7XG4gICAgICBjYXNlIGNsb3VkUHJvdmlkZXJzLmF3czpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiU29ycnksIEkgaGF2ZW4ndCB3cml0dGVuIGFueSBjb2RlIHRvIHByb3Zpc2lvbiByYW5jaGVyIG9uIEFXUy4gSWYgeW91IHdhbnQgdG8gYWRkIHRoZSBjb2RlIGluLCBjaGVjayBvdXQgdGhpcyBwcm9qZWN0IGFuZCBnbyB0byBzcmMvcHJvdmlzaW9uUmFuY2hlck9uRGlnaXRhbE9jZWFuL1JhbmNoZXJPU0NvbmZpZy50cyBhbmQgbW9kaWZ5IHRoZSBjb2RlLlwiXG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJyR7Y2xvdWR9IGlzblxcJ3QgYSBzdXBwb3J0ZWQgY2xvdWQgcHJvdmlkZXIuIFlvdSBtdXN0IHNwZWNpZnkgZWl0aGVyIFwiYXdzXCIgb3IgXCJkaWdpdGFsT2NlYW5cIi4nXG4gICAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBlbnVtIGNsb3VkUHJvdmlkZXJzIHtcbiAgZGlnaXRhbE9jZWFuLFxuICBhd3MsXG59XG4iLCJpbXBvcnQgRGlnaXRhbE9jZWFuIGZyb20gXCJkby13cmFwcGVyXCI7XG5pbXBvcnQgZ2V0QXV0aFRva2VuIGZyb20gXCIuL2dldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuKFxuICBjb25maWdPYmplY3Q6IG9iamVjdFxuKTogZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlIHtcbiAgbGV0IHJhbmNoZXJJbnN0YW5jZTogb2JqZWN0ID0ge1xuICAgIG5hbWU6IFwiYW5vdGhlclwiLFxuICAgIHJlZ2lvbjogXCJueWMzXCIsXG4gICAgc2l6ZTogXCJzLTF2Y3B1LTFnYlwiLFxuICAgIGltYWdlOiBcInJhbmNoZXJvc1wiLFxuICAgIHNzaF9rZXlzOiBbMjc2MDg5ODYsIDI4NDk2NDU3XSxcbiAgICBiYWNrdXBzOiBmYWxzZSxcbiAgICBpcHY2OiB0cnVlLFxuICAgIHByaXZhdGVfbmV0d29ya2luZzogbnVsbCxcbiAgICB1c2VyX2RhdGE6IG51bGwsXG4gICAgdm9sdW1lczogbnVsbCxcbiAgICB0YWdzOiBbXSxcbiAgfTtcblxuICByYW5jaGVySW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKHJhbmNoZXJJbnN0YW5jZSwgY29uZmlnT2JqZWN0KTtcblxuICBjb25zdCBhdXRoVG9rZW4gPSBnZXRBdXRoVG9rZW4oKTtcbiAgY29uc3QgZGlnaXRhbE9jZWFuV3JhcHBlciA9IG5ldyBEaWdpdGFsT2NlYW4oYXV0aFRva2VuKTtcbiAgLy8gQHRzLWlnbm9yZTogcmV0dXJuIHR5cGUgaW5zaXN0cyBpdCdzIGEgcHJvbWlzZSByYXRoZXIgdGhhbiBhIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZVxuICByZXR1cm4gKFxuICAgIGRpZ2l0YWxPY2VhbldyYXBwZXIuZHJvcGxldHNcbiAgICAgIC8vIEB0cy1pZ25vcmU6IHR5cGVzIGZvciByYW5jaGVySW5zdGFuY2UgYXJlIG5vdCBjb21wYXRpYmxlXG4gICAgICAuY3JlYXRlKHJhbmNoZXJJbnN0YW5jZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSB7XG4gIGlkOiBiaWdpbnQ7XG4gIG5hbWU6IHN0cmluZztcbiAgbWVtb3J5SW5NZWdhYnl0ZXM6IGJpZ2ludDtcbiAgdmNwdXM6IGJpZ2ludDtcbiAgZGlzazogYmlnaW50O1xuICBsb2NrZWQ6IGJvb2xlYW47XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGJhY2t1cF9pZHM6IEFycmF5PGFueT47XG4gIHNuYXBzaG90X2lkczogQXJyYXk8YW55PjtcbiAgZmVhdHVyZXM6IEFycmF5PGFueT47XG4gIHJlZ2lvbjogb2JqZWN0O1xuICBpbWFnZTogb2JqZWN0O1xuICBzaXplOiBvYmplY3Q7XG4gIHNpemVfc2x1Zzogc3RyaW5nO1xuICBuZXR3b3Jrczogb2JqZWN0O1xuICBrZXJuZWw6IG9iamVjdCB8IG51bGw7XG4gIG5leHRfYmFja3VwX3dpbmRvdzogb2JqZWN0IHwgbnVsbDtcbiAgdGFnczogQXJyYXk8YW55PjtcbiAgdm9sdW1lX2lkczogQXJyYXk8YW55PjtcbiAgdnBjX3V1aWQ6IFN0cmluZztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xuICBmdW5jdGlvbiBwZXJzb25hbEFjY2Vzc1Rva2VuSXNVbmRlZmluZWQoXG4gICAgcGVyc29uYWxBY2Nlc3NUb2tlbjogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICk6IHBlcnNvbmFsQWNjZXNzVG9rZW4gaXMgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKHBlcnNvbmFsQWNjZXNzVG9rZW4gYXMgc3RyaW5nKS5sZW5ndGggPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU47XG5cbiAgaWYgKHBlcnNvbmFsQWNjZXNzVG9rZW5Jc1VuZGVmaW5lZChhdXRoVG9rZW4pKSB7XG4gICAgdGhyb3cgXCJEaWdpdGFsIE9jZWFuIFBlcnNvbmFsIEFjY2VzcyBUb2tlbiBoYXMgbm90IGJlZW4gc2V0IGluIGAuZW52YC4gQ2Fubm90IGFjY2VzcyBkaWdpdGFsIG9jZWFuIEFQSVwiO1xuICB9XG4gIHJldHVybiBhdXRoVG9rZW47XG59XG4iLCJpbXBvcnQgY2FjIGZyb20gXCJjYWNcIjtcbmltcG9ydCBwcm9tcHRzIGZyb20gXCJwcm9tcHRzXCI7XG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCB7XG4gIFJhbmNoZXJPU0NvbmZpZyxcbiAgY2xvdWRQcm92aWRlcnMsXG59IGZyb20gXCIuL3Byb3Zpc2lvblJhbmNoZXJPbkRpZ2l0YWxPY2Vhbi9SYW5jaGVyT1NDb25maWdcIjtcblxuZG90ZW52LmNvbmZpZygpOyAvLyB3ZSB3YW50IHRvIGluaXRpYWxpemUgb3VyIGVudmlyb25tZW50IHZhcmlhYmxlcyBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb2YgdGhlIHByb2dyYW0uIFJpZ2h0IG5vdyB0aGV5IGFyZSBuZWVkZWQgaW4gcHJvdmlzaW9uUmFuY2hlck9uRGlnaXRhbE9jZWFuL2dldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4udHNcblxuY29uc3QgY2xpID0gY2FjKCk7XG5jb25zdCBwYXJzZWQgPSBjbGkucGFyc2UoKTtcblxuLy8gY29uc3QgcHJvbXB0c0NvbmZpZzogUHJvbXB0T2JqZWN0ID0ge1xuLy8gICB0eXBlOiBcIm51bWJlclwiLFxuLy8gICBuYW1lOiBcInZhbHVlXCIsXG4vLyAgIG1lc3NhZ2U6IFwiaG93IG9sZCBhcmUgeW91XCIsXG4vLyAgIHZhbGlkYXRlOiAodmFsdWU6IG51bWJlcikgPT4gKHZhbHVlIDwgMTggPyBgTmlnaHRjbHViIGlzIDE4KyBvbmx5YCA6IHRydWUpLFxuLy8gfTtcblxuY29uc3QgcXVlc3Rpb25zOiBBcnJheTxwcm9tcHRzLlByb21wdE9iamVjdD4gPSBbXG4gIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBuYW1lOiBcImRyb3BsZXROYW1lXCIsXG4gICAgbWVzc2FnZTogXCJXaGF0IGRvIHlvdSB3YW50IHRvIG5hbWUgeW91ciBkcm9wbGV0P1wiLFxuICAgIGluaXRpYWw6IFwicmFuY2hlclwiLFxuICB9LFxuXTtcblxuY29uc3QgcmFuY2hlckNvbmZpZyA9IG5ldyBSYW5jaGVyT1NDb25maWcoKTtcblxuKGFzeW5jICgpID0+IHtcbiAgY29uc3QgYW5zd2VycyA9IGF3YWl0IHByb21wdHMocXVlc3Rpb25zKTtcbiAgY29uc3QgZHJvcGxldCA9IGF3YWl0IHJhbmNoZXJDb25maWdcbiAgICAuc2V0TmFtZShhbnN3ZXJzLmRyb3BsZXROYW1lKVxuICAgIC5wcm92aXNpb25PbihjbG91ZFByb3ZpZGVycy5kaWdpdGFsT2NlYW4pO1xuICBjb25zb2xlLmxvZyhkcm9wbGV0KTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
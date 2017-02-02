var sources=['public/scripts/*.js','!public/scripts/client.min.js']
module.exports=function(grunt){
 //initializing configs


grunt.initConfig({

  //uglify tasks
  uglify:{
    dist:{
      src:sources,
      dest:'public/scripts/client.min.js'
    }
  },
 //clean
 clean:['public/scripts/client.min.js','public/vendors/*.*'],

 watch:{
   files:sources,
   tasks:['default']
 },

 //copy tasks
 copy:{

   files:{
     src:['node_modules/angular/angular.min.js'],
     dest:'public/vendors/',
     expand:true,
     flatten:true
   }
 }

});
 // loading all tasks
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');
 //declaring the default task(option)
grunt.registerTask('default',['clean','uglify','copy']);
};

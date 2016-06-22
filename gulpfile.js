var gulp = require('gulp'),
    gulpCompass = require('gulp-compass');


gulp.task('styles',function(){
    gulp.src('./scss/**/*.scss') // sass 來源路徑
        .pipe(gulpCompass({
            config_file: 'config.rb',
//            sourcemap: true,
            time: true,
            css: 'css',           // compass 輸出位置
            sass: 'scss',      // sass 來源路徑
            image: 'img',   // 圖片來源路徑
            style: 'compressed',                // CSS 處理方式，預設 nested（expanded, nested, compact, compressed）
            comments: false,                    // 是否要註解，預設(true)
            require: ['susy']                // 額外套件 susy
        }))
    .pipe(gulp.dest('susytest1/css/'));
});
gulp.task('watch',function(){
    gulp.watch('.//scss/*.scss',['styles']);
});


gulp.task('default',['styles','watch']);
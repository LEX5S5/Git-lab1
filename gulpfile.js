import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import sourcemaps from 'gulp-sourcemaps';
import zip from 'gulp-zip';
import plumber from 'gulp-plumber';
import fs from 'fs';

// Ініціалізація sass
const sassCompile = gulpSass(sass);

// Debug Task
gulp.task('sass-debug', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                console.error(err.message);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sassCompile())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

// Production Task
gulp.task('sass-production', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                console.error(err.message);
                this.emit('end');
            }
        }))
        .pipe(sassCompile())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'));
});



// Zip Task with Directory Check
gulp.task('zip', function () {
    // Перевірка наявності директорій dist/images та інших необхідних директорій
    if (!fs.existsSync('dist/images')) {
        fs.mkdirSync('dist/images', { recursive: true });
    }

    // Перевірка наявності директорії js перед її обробкою
    if (!fs.existsSync('js')) {
        console.log('Directory "js" does not exist. Skipping JS files.');
    }

    // Додаємо всі HTML, CSS, JS файли, зображення до архіву
    return gulp.src([
        'html/*.html',   // Всі HTML файли
        'css/**/*.css',  // Всі CSS файли
        'js/**/*.js',    // Всі JS файли, якщо вони є
        'html/*.jpg' // Всі зображення в html/
    ], { base: './' })  // Зберігаємо структуру папок відносно кореня
        .pipe(zip('project.zip'))
        .pipe(gulp.dest('./dist'));  // Вихідна папка для архіву
});

// Default Task 
gulp.task('default', gulp.series('sass-debug', 'zip'));

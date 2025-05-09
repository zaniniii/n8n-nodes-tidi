const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  return gulp.src('src/**/*.ts')  // Substitua com o caminho do seu código TypeScript
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));  // Saída para a pasta dist
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.ts', gulp.series('scripts'));  // Assistir alterações nos arquivos TS
});

gulp.task('default', gulp.series('scripts', 'watch'));

gulp.task('build:icons', () =>
  gulp.src('nodes/**/icons/*.svg')
    .pipe(gulp.dest('dist/nodes'))
);
@echo off

cd datenschutz
for /R %%f IN ("*.png") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
for /R %%f IN ("*.jpg") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
cd ..

cd dist
for /R %%f IN ("*.png") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
for /R %%f IN ("*.jpg") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
cd ..

cd impressum
for /R %%f IN ("*.png") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
for /R %%f IN ("*.jpg") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
cd ..

cd sharepics
for /R %%f IN ("*.png") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
for /R %%f IN ("*.jpg") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
cd ..

cd src
for /R %%f IN ("*.png") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf
for /R %%f IN ("*.jpg") do call "C:\Users\reedw\OneDrive\Dokumente\programming\fffmoosburg-homepage\runcwebp.bat" %%f %%~df %%~pf %%~nf

PAUSE
#!/bin/bash

mkdir vendor

pushd vendor
    mkdir lib
    mkdir include
    wget https://github.com/raysan5/raylib/releases/download/3.7.0/raylib-3.7.0_webassembly.zip
    unzip raylib-3.7.0_webassembly.zip
    mv raylib-3.7.0_webassembly/lib/* ./lib
    mv raylib-3.7.0_webassembly/include/* ./include
popd

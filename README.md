# GMTK2021

So, to build this, clone [emsdk](https://github.com/emscripten-core/emsdk) somewhere on your machine, then open a terminal in the directory. After that, do

```bash
$ ./emsdk install latest
$ ./emsdk activate latest
$ source emsdk_env.sh  # (This can be any other env file, depending on the shell)
```

After you do that, you should be able to run `emcc`. If it works, you can get the dependencies. Go into the game's repository and do

```bash
./deps.sh
```

To get all the dependencies. Now you're good to go! Go into this repository, and just

```bash
$ make
```

or 

```bash
$ make run
```

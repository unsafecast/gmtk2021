
CC=emcc
RUN=emrun
LFL=-L./vendor/lib -I./vendor/include -lraylib -s USE_GLFW=3 -s WASM=1 -Wall -Wextra

SRC=$(wildcard src/*.cpp)
BASEBIN=gmtk2021

$(BASEBIN).html: $(SRC)
	$(CC) $(LFL) -o $(BASEBIN).html $(SRC)

.PHONY: run
run: $(BASEBIN).html
	$(RUN) $(BASEBIN).html

.PHONY: clean
clean:
	rm $(BASEBIN).js
	rm $(BASEBIN).html
	rm $(BASEBIN).wasm

.PHONY: setup build run debug
CYAN:=\033[0;36m
RED=\033[0;31m
NC:=\033[0m
APP:=lala.tg.bot

.SILENT:
setup:
	echo -e "${CYAN}Installing dependencies${NC}"
	npm install --silent \
	&& echo -e "${CYAN}Setup finished run make build to proceed!${NC}" \
	|| echo -e "${RED}Setup Failed!${NC}"

build:
	echo -e "${CYAN}Building environment:${NC}"
	docker build --rm -t ${APP} . \
	&& echo -e "${CYAN}Application is ready to run!${NC}" \
	|| echo -e "${RED}Build Failed!${NC}"

run:
	echo -e "${CYAN}Starting up application${NC}"
	docker run -it --rm -v ${PWD}/:/app/ -p 3000:3000 ${APP}

test:
	echo -e "${CYAN}Installing dependencies${NC}"
	docker run -it --rm -v ${PWD}/:/app/ ${APP} npm test \
	&& echo -e "${CYAN}Test Finished${NC}" 

debug:
	docker run -it --rm -v ${PWD}/:/app/ -p 3000:3000 ${APP} bash

clean:
	docker rmi ${APP}
	docker system prune
	docker image prune -f
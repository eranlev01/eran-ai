.PHONY: build-dev
build-dev: ## Build the dev docker image.
	docker compose -f docker/dev/docker-compose.yml build

.PHONY: start-dev
start-dev: ## Start the dev docker container.
	docker compose -f docker/dev/docker-compose.yml up -d

.PHONY: stop-dev
stop-dev: ## Stop the dev docker container.
	docker compose -f docker/dev/docker-compose.yml down

.PHONY: build-staging
build-staging: ## Build the staging docker image.
	docker compose -f docker/staging/docker-compose.yml build

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	docker compose -f docker/staging/docker-compose.yml up -d

.PHONY: stop-staging
stop-staging: ## Stop the staging docker container.
	docker compose -f docker/staging/docker-compose.yml down
  
.PHONY: build-prod
build-prod: ## Build the prod docker image.
	docker compose -f docker/prod/docker-compose.yml build

.PHONY: start-prod
start-prod: ## Start the prod docker container.
	docker compose -f docker/prod/docker-compose.yml up -d

.PHONY: stop-prod
stop-prod: ## Stop the prod docker container.
	docker compose -f docker/prod/docker-compose.yml down
# knex-pg-docker-boilerplate

Set up for knex. The following things are needed.  
1. knexfile  
  - Configuration file for knex. Uses .env for setup.
2. connector  
  - exports a configured knex object.
3. scripts to run the knex api.
  - found in server/db/scripts

To run, first run `npm run knex-init` followed by `npm run migrate:make my-migration`. 
Then write your migration in the new file created in ./migrations.  
Once done, run `npm run migrate:latest` to migrate.  
run `npm run migrate:rollback` to rollback the latest migration.

-- DROP TABLE IF EXISTS workouts CASCADE;
-- DROP TABLE IF EXISTS exercises CASCADE;
-- DROP TABLE IF EXISTS users CASCADE;

-- POSTGRES Superuser is not authenticating
-- Cannot navigate to folder and change permission in Mac
-- Trying Mongo instead

CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  exercise_tite text DEFAULT NULL,
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  password text NOT NULL,
  starting_weight int NULL,
  current_weight int NULL
);

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  workout_title text DEFAULT NULL,
  status_workout BOOLEAN NULL,
  status_diet BOOLEAN NULL,
  day_number int NOT NULL,
  week_number int NOT NULL,
  block_number int NOT NULL,
  workout_date TIMESTAMP NOT NULL,
  exercise_title text DEFAULT NULL REFERENCES exercises(id),
  user_id int NOT NULL REFERENCES users(id),
);

CREATE TABLE exercise_counts (
  id SERIAL PRIMARY KEY,
  reps numeric(15,2) DEFAULT 0,
  pounds numeric(15,2) DEFAULT 0,
  exercise_id text DEFAULT NULL REFERENCES exercises(id),
  user_id int NOT NULL REFERENCES users(id),
);



-- export PATH="/Library/PostgreSQL/12/bin:$PATH"
-- heroku pg:psql

-- INSERT INTO person(first, last, birthdate) VALUES
--   ('Thomas', 'Burton', '1878-08-28'),
--   ('Herbert', 'Burton', '1847-10-01'),
--   ('Mary', 'Pass', '1849-08-06');

-- CREATE USER ta_user WITH PASSWORD 'ta_pass';
-- GRANT SELECT, INSERT, UPDATE ON person TO ta_user;
-- GRANT USAGE, SELECT ON SEQUENCE person_id_seq TO ta_user;
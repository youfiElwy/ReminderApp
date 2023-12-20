DROP TABLE IF EXISTS
	reminder,
	users;

CREATE TABLE users(
	id serial,
	username character varying(50) unique,
	password character varying(128),
	salt character varying(32),
	
	primary key(id)
);

CREATE TABLE reminder (
    id serial,
    title character varying(50),
    text character varying(200),
    date date, 						-- 'YYYY-MM-DD'
    image text,
    rem_type character varying(12),
    user_id integer,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);


-- Insert two users
INSERT INTO users (username, password, salt) VALUES
    ('user1', '4b7309068d3a8fa2d53e9c13ea55b65e60c7afaa0cf38dadfddfbb8dad67223cdb0e8bf3f1cce56f7744d4d26fc515b4e6975c233d6d962893714d9caf6229fb', '8860150d61609eb7319dc890aaa7d846'),
    ('user2', 'f4305d44fd73b66f31f1f8f167098649f1741dcbb7de3477d99203bb8e78595300910a4993ab0d1da95a044470716206f1e5909d51f8d733048a12a621d24f38', '1ef28a3339f24cb68f5dcecf7db392a8');

-- Insert 9 reminders for user1
INSERT INTO reminder (title, text, date, image, rem_type, user_id) VALUES
    ('Reminder 1', 'Text for Reminder 1', '2023-11-07', '', 'normal', 1),
    ('Reminder 2', 'Text for Reminder 2', '2023-11-08', '', 'normal', 1),
    ('Reminder 3', 'Text for Reminder 3', '2023-11-09', '', 'normal', 1),
    ('Reminder 4', 'Text for Reminder 4', '2023-11-10', '', 'frequent', 1),
    ('Reminder 5', 'Text for Reminder 5', '2023-11-11', '', 'frequent', 1),
    ('Reminder 6', 'Text for Reminder 6', '2023-11-12', '', 'frequent', 1),
    ('Reminder 7', 'Text for Reminder 7', '2023-11-13', '', 'sensitive', 1),
    ('Reminder 8', 'Text for Reminder 8', '2023-11-14', '', 'sensitive', 1),
    ('Reminder 9', 'Text for Reminder 9', '2023-11-15', '', 'sensitive', 1);

-- Insert 9 reminders for user2
INSERT INTO reminder (title, text, date, image, rem_type, user_id) VALUES
    ('Reminder 1', 'Text for Reminder 1', '2023-11-16', '', 'normal', 2),
    ('Reminder 2', 'Text for Reminder 2', '2023-11-17', '', 'normal', 2),
    ('Reminder 3', 'Text for Reminder 3', '2023-11-18', '', 'normal', 2),
    ('Reminder 4', 'Text for Reminder 4', '2023-11-19', '', 'frequent', 2),
    ('Reminder 5', 'Text for Reminder 5', '2023-11-20', '', 'frequent', 2),
    ('Reminder 6', 'Text for Reminder 6', '2023-11-21', '', 'frequent', 2),
    ('Reminder 7', 'Text for Reminder 7', '2023-11-22', '', 'sensitive', 2),
    ('Reminder 8', 'Text for Reminder 8', '2023-11-23', '', 'sensitive', 2),
    ('Reminder 9', 'Text for Reminder 9', '2023-11-24', '', 'sensitive', 2);

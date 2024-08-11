CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(12) NOT NULL,
    password VARCHAR(999) NOT NULL
);

CREATE TABLE roles (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(15) NOT NULL
);

CREATE TABLE users_roles (
    user_id BIGINT NOT NULL,
    role_id BIGINT NOT NULL,
    primary key(user_id, role_id),
    foreign key(user_id) references users(id),
    foreign key(role_id) references roles(id)
);

CREATE TABLE topics(
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    description VARCHAR(500) NOT NULL,
    user_id BIGINT NOT NULL
);

CREATE TABLE messages(
    id BIGSERIAL PRIMARY KEY,
    text VARCHAR(800) NOT NULL,
    topic_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL
);

INSERT INTO roles (name)
VALUES ('ROLE_USER'), ('ROLE_ADMIN');

INSERT INTO users (username, password)
VALUES
('admin', '$2a$04$r0lhBvfpNRzQap1LfQRbfeul36bByHS5671iAEiCPJ0C1cekIKh3C'),
('user', '$2a$04$r0lhBvfpNRzQap1LfQRbfeul36bByHS5671iAEiCPJ0C1cekIKh3C');

INSERT INTO users_roles (user_id, role_id)
VALUES
(1, 2),
(2, 1);

INSERT INTO topics (title, description, user_id)
VALUES
('Topic 1', 'Description of topic 1', 1),
('Topic 2', 'Description of topic 3', 1),
('Topic 3', 'Description of topic 3', 1);

INSERT INTO messages (text, topic_id, user_id)
VALUES
('Message 1', 1, 2),
('Message 2', 1, 2),
('Message 3', 1, 2),
('Message 1', 2, 2),
('Message 2', 2, 2),
('Message 3', 2, 2),
('Message 1', 3, 2),
('Message 2', 3, 2),
('Message 3', 3, 2);
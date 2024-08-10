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
create table if not exists  user (
	username varchar(50) not null,
	password varchar(50) not null,
	first_name varchar(200),
	last_name varchar (200),
	id int not null auto_increment,
	email varchar(200) not null,
	primary key (id)
) ENGINE=InnoDB;

create table if not exists chapter(
	id int not null auto_increment,
	title text not null,
	userID int not null,
	primary key (id),
	foreign key (userID)
		references user(id)
		on delete cascade
) ENGINE=InnoDB;

create table if not exists image(
	image_path varchar(200) not null,
	id int not null auto_increment,
	image_width int,
	image_height int,
	caption text,
	primary key (id)
) ENGINE=InnoDB;

create table if not exists post(
	id int not null auto_increment,
	content mediumblob,
	title text not null,
	updated timestamp default current_timestamp on update current_timestamp,
	chapterID int not null,
	userID int not null,
	post_type enum('post', 'gallery', 'video') not null,
	post_mode enum('draft', 'published') not null,
	view_count int not null default 0,
	likes int not null default 0,
	feature_image_ID int,

	primary key (id),

	foreign key (chapterID)
		references chapter(id)
		on delete cascade,

	foreign key (userID)
		references user(id)
		on delete cascade,

	foreign key (feature_image_ID)
		references image(id)
		on delete cascade

) ENGINE=InnoDB;

create table if not exists tag(
	title varchar(200) not null,
	id int not null auto_increment,
	primary key(id)
) ENGINE=InnoDB;

create table if not exists location(
	id int not null auto_increment,
	city varchar(200),
	state varchar(200),
	country varchar(200) not null,
	lat decimal(18,15) not null,
	lng decimal(18,15) not null,
	name varchar(200),
	primary key(id)
) ENGINE=InnoDB;


/* Relational table */
create table if not exists postTags (
	postID int not null,
	tagID int not null,
	primary key (postID,tagID),

	foreign key (postID)
		references post(id)
		on delete cascade,

	foreign key (tagID)
		references tag(id)
		on delete cascade
) ENGINE=InnoDB;

create table if not exists postLocation (
	locationID int not null,
	postID int not null,
	chapterID int not null,
	order_number int,
	primary key (locationID, postID, chapterID, order_number),

	foreign key (locationID)
		references location(id)
		on delete cascade,

	foreign key (postID)
		references post(id)
		on delete cascade,

	foreign key (chapterID)
		references chapter(id)
		on delete cascade
) ENGINE=InnoDB;

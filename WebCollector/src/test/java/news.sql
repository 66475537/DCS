SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS CITY_DETAIL;
DROP TABLE IF EXISTS CITY_DETAIL_ITEM;
DROP TABLE IF EXISTS COUNTRY_DETAIL;
DROP TABLE IF EXISTS COUNTRY_DETAIL_ITEM;




/* Create Tables */

CREATE TABLE CITY_DETAIL
(
	CDID varchar(32) NOT NULL,
	COLLECTION varchar(256),
	EXPRESSION varchar(512),
	PRIMARY KEY (CDID)
);


CREATE TABLE CITY_DETAIL_ITEM
(
	ITEM_ID varchar(32) NOT NULL,
	CDID varchar(32),
	CITY_ID varchar(32),
	DETAIL varchar(2048),
	CREATE_TIME varchar(20),
	IS_IMG int,
	PRIMARY KEY (ITEM_ID)
);


CREATE TABLE COUNTRY_DETAIL
(
	CDID varchar(32) NOT NULL,
	COLLECTION varchar(256),
	EXPRESSION varchar(512),
	PRIMARY KEY (CDID)
);


CREATE TABLE COUNTRY_DETAIL_ITEM
(
	ITEM_ID varchar(32) NOT NULL,
	CDID varchar(32),
	COUNTRY_ID varchar(32),
	DETAIL varchar(2048),
	CREATE_TIME varchar(20),
	IS_IMG int,
	PRIMARY KEY (ITEM_ID)
);




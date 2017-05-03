SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS REGION_COLLE_STATE;
DROP TABLE IF EXISTS REGION_DATA;




/* Create Tables */

CREATE TABLE REGION_COLLE_STATE
(
	REGION_ID varchar(32) NOT NULL,
	UPDATE_TIME varchar(20),
	-- 1正常2不正常
	STATUS varchar(2) COMMENT '1正常2不正常',
	PRIMARY KEY (REGION_ID)
);


CREATE TABLE REGION_DATA
(
	REGION_ID varchar(32) NOT NULL,
	PARENT_REGION_ID varchar(32),
	LEVEL int,
	C_NAME varchar(64),
	E_NAME varchar(64),
	LAT varchar(32),
	LON varchar(32),
	CREATE_TIME varchar(20),
	-- 1是2否
	IS_CITY varchar(2) COMMENT '1是2否',
	PRIMARY KEY (REGION_ID)
);




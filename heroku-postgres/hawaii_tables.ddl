CREATE SEQUENCE public.station_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.station_id_seq
    OWNER TO postgres;



CREATE SEQUENCE public.weather_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.weather_id_seq
    OWNER TO postgres;



-- Table: public.station

-- DROP TABLE public.station;

CREATE TABLE public.station
(
    station_id integer NOT NULL DEFAULT nextval('station_id_seq'::regclass),
    station character(11) NOT NULL,
    name character varying(150) NOT NULL,
    latitude numeric(9,6)NOT NULL,
    longitude numeric(9,6)NOT NULL,
    elevation numeric(15,6) NOT NULL,
    CONSTRAINT station_pkey PRIMARY KEY (station_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.station
    OWNER to postgres;

   
-- Table: public.weather

-- DROP TABLE public.weather;

CREATE TABLE public.weather
(
    weather_id integer NOT NULL DEFAULT nextval('weather_id_seq'::regclass),
    station character(11) NOT NULL,
    wdate date NOT NULL,
    prcp numeric(9,6)NOT NULL,
    tobs numeric(9,6)NOT NULL,
    CONSTRAINT weather_pkey PRIMARY KEY (weather_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.weather
    OWNER to postgres;


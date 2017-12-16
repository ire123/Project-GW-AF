-- Table: public."country_yearly_temps"

-- DROP TABLE public."country_yearly_temps";
-- year,country,yr_avg_tmp_f,yr_avg_tmp_c,yr_avg_tmp_uncertainty
CREATE TABLE public."country_yearly_temps"
(
    yr_temp_id integer NOT NULL DEFAULT nextval('cnty_yr_temp_seq'::regclass),
    year integer NOT NULL,
    country character varying(100) COLLATE pg_catalog."default",
    yr_avg_temp_f numeric(9, 6) NOT NULL,
    yr_avg_temp_c numeric(9, 6) NOT NULL,
    yr_avg_temp_uncertainty numeric(9, 6) NOT NULL,
    CONSTRAINT yr_temp_id_pk PRIMARY KEY (yr_temp_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."country_yearly_temps"
    OWNER to postgres;
COMMENT ON TABLE public."country_yearly_temps"
    IS 'This table contains the  country yearly average of monthly temperature averages.';
  
commit;


-- Table: public."country_mthly_temps"

--DROP TABLE public."country_mthly_temps";
-- date,mthly_avg_temp_f,mthly_avg_temp_c,mthly_avg_temp_uncertainty,country
CREATE TABLE public."country_mthly_temps"
(
    mthly_temp_id integer NOT NULL DEFAULT nextval('cnty_mthly_temp_seq'::regclass),
    m_date date NOT NULL,
    mthly_avg_temp_f numeric(9, 6) NOT NULL,
    mthly_avg_temp_c numeric(9, 6) NOT NULL,
    mthly_avg_temp_uncertainty numeric(9, 6) NOT NULL,
    country character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT mthly_temp_id_pk PRIMARY KEY (mthly_temp_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."country_mthly_temps"
    OWNER to postgres;
COMMENT ON TABLE public."country_mthly_temps"
    IS 'This table contains the country monthly average temperatures.';

commit;


-- Table: public."global_mthly_temps"

--DROP TABLE public."global_mthly_temps";
-- date,land_avg_temp_f,land_avg_temp_c,land_avg_temp_uncertain,land_max_temp_f,land_max_temp_c,
-- land_max_temp_uncertain,land_min_temp_f,land_min_temp_c,land_min_temp_uncertain,land_ocean_avg_temp_f,
-- land_ocean_avg_temp_c,land_ocean_avg_temp_uncertain
CREATE TABLE public."global_mthly_temps"
(
    g_mthly_temp_id integer NOT NULL DEFAULT nextval('g_mthly_temp_seq'::regclass),
    g_m_date date NOT NULL,
    g_land_avg_tempf numeric(9, 6) NOT NULL,
    g_land_avg_tempc numeric(9, 6) NOT NULL,
    g_land_avg_temp_uncert numeric(9, 6) NOT NULL,
    g_land_max_tempf numeric(9, 6) NOT NULL,
    g_land_max_tempc numeric(9, 6) NOT NULL,
    g_land_max_temp_uncert numeric(9, 6) NOT NULL,
    g_land_min_tempf numeric(9, 6) NOT NULL,
    g_land_min_tempc numeric(9, 6) NOT NULL,
    g_land_min_temp_uncert numeric(9, 6) NOT NULL,
    g_land_ocean_avg_tempf numeric(9, 6) NOT NULL,
    g_land_ocean_avg_tempc numeric(9, 6) NOT NULL,
    g_land_ocean_avg_temp_uncert numeric(9, 6) NOT NULL,
    CONSTRAINT g_mthly_temp_id_pk PRIMARY KEY (g_mthly_temp_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."global_mthly_temps"
    OWNER to postgres;
COMMENT ON TABLE public."global_mthly_temps"
    IS 'This table contains the global monthly temperatures.';    
    
commit;

-- Table: public."state_country_mthly_temps"

--DROP TABLE public."state_country_mthly_tempss";
-- date,mthly_avg_temp_f,mthly_avg_temp_c,mthly_avg_temp_uncertainty,state,country
CREATE TABLE public."state_country_mthly_temps"
(
    mthly_temp_id integer NOT NULL DEFAULT nextval('st_cnty_mthly_temp_seq'::regclass),
    m_date date NOT NULL,
    mthly_avg_temp_f numeric(9, 6) NOT NULL,
    mthly_avg_temp_c numeric(9, 6) NOT NULL,
    mthly_avg_temp_uncertainty numeric(9, 6) NOT NULL,
    state character varying(100),
    country character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT st_mthly_temp_id_pk PRIMARY KEY (mthly_temp_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."state_country_mthly_temps"
    OWNER to postgres;
COMMENT ON TABLE public."state_country_mthly_temps"
    IS 'This table contains the state country monthly average temperatures.';


-- Table: public."city_country_mthly_temps"

--DROP TABLE public."city_country_mthly_temps";
-- date,mthly_avg_temp_f,mthly_avg_temp_c,mthly_avg_temp_uncertainty,city,country,latitude,longitude
CREATE TABLE public."city_country_mthly_temps"
(
    mthly_temp_id integer NOT NULL DEFAULT nextval('city_cnty_mthly_temp_seq'::regclass),
    m_date date NOT NULL,
    mthly_avg_temp_f numeric(9, 6) NOT NULL,
    mthly_avg_temp_c numeric(9, 6) NOT NULL,
    mthly_avg_temp_uncertainty numeric(9, 6) NOT NULL,
    city character varying(100),
    country character varying(100) COLLATE pg_catalog."default",
    latitude character varying(12) NOT NULL,
    longitude character varying(12) NOT NULL,
    CONSTRAINT city_mthly_temp_id_pk PRIMARY KEY (mthly_temp_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."city_country_mthly_temps"
    OWNER to postgres;
COMMENT ON TABLE public."city_country_mthly_temps"
    IS 'This table contains the monthly average temperature by city,country.';
  
commit;  
    

-- Table: public."country_yearly_co2"

-- DROP TABLE public."country_yearly_co2";
-- year,country,yr_avg_tmp_f,yr_avg_tmp_c,yr_avg_tmp_uncertainty
CREATE TABLE public."country_yearly_co2"
(
    yr_co2_id integer NOT NULL DEFAULT nextval('cnty_yr_co2_seq'::regclass),
    year integer NOT NULL,
    country character varying(100) COLLATE pg_catalog."default",
    co2 numeric(15,2) NOT NULL,
    CONSTRAINT yr_co2_id_pk PRIMARY KEY (yr_co2_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."country_yearly_co2"
    OWNER to postgres;
COMMENT ON TABLE public."country_yearly_co2"
    IS 'This table contains the by country, by year CO2 in thousand Metric Tons.';
  
commit;

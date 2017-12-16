CREATE SEQUENCE public.cnty_yr_temp_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.cnty_yr_temp_seq
    OWNER TO postgres;

COMMENT ON SEQUENCE public.cnty_yr_temp_seq
    IS 'sequence number for country yearly average temperatures.';

commit;

CREATE SEQUENCE public.cnty_mthly_temp_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.cnty_mthly_temp_seq
    OWNER TO postgres;

COMMENT ON SEQUENCE public.cnty_mthly_temp_seq
    IS 'sequence number for country monthly average temperatures.';

commit;

CREATE SEQUENCE public.g_mthly_temp_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.g_mthly_temp_seq
    OWNER TO postgres;

commit;


COMMENT ON SEQUENCE public.g_mthly_temp_seq
    IS 'sequence number for global monthly average temperatures.';
 
CREATE SEQUENCE public.st_cnty_mthly_temp_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.st_cnty_mthly_temp_seq
    OWNER TO postgres;

commit;


COMMENT ON SEQUENCE public.st_cnty_mthly_temp_seq
    IS 'sequence number for state country monthly average temperatures.';


CREATE SEQUENCE public.city_cnty_mthly_temp_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.city_cnty_mthly_temp_seq
    OWNER TO postgres;

commit;

COMMENT ON SEQUENCE public.city_cnty_mthly_temp_seq
    IS 'sequence number for city country monthly average temperatures.';


commit;

CREATE SEQUENCE public.cnty_yr_co2_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.cnty_yr_co2_seq
    OWNER TO postgres;

commit;

COMMENT ON SEQUENCE public.cnty_yr_co2_seq
    IS 'sequence number for country by year CO2 thousand metric tons.';


commit;
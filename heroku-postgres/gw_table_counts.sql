select count(*) from city_country_mthly_temps;
-- 227355
select count(*) from city_country_mthly_temps 
where m_date >= '2012-01-01';

--delete from city_country_mthly_temps where m_date < '2012-01-01';
-- deleted 22615

select count(*) from country_mthly_temps;
-- 539647
--delete from country_mthly_temps where m_date < '2012-01-01';
-- deleted 536755



select count(*) from country_yearly_temps;
-- 45358
--delete from country_yearly_temps where year < 2012;
-- deleted 45117

--
select count(*) from global_mthly_temps;
-- 1992

select * from global_mthly_temps;

select date_part('year', g_m_date) from global_mthly_temps;

select date_part('year', g_m_date),
       min(g_land_max_tempf), 
       max(g_land_max_tempf),
       (max(g_land_max_tempf) - min(g_land_max_tempf)) as difference 
  from global_mthly_temps
group by date_part('year', g_m_date) 
order by date_part('year', g_m_date);



select count(*) from state_country_mthly_temps;
-- 617959
--delete from state_country_mthly_temps where m_date < '2012-01-01';
-- deleted 615067

select count(*) from country_yearly_co2;
-- 17232
-- delete from country_yearly_co2 where year < 2012;
-- deleted 16572


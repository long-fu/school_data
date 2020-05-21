# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql

class db_conntect():
    def __init__(self):
        self.connect = pymysql.connect(host='localhost',user='root',passwd='V6nbztXkPYm^h@m9',db='guokao_db')
        self.cursor = self.connect.cursor()
        pass
    
   

    def process_special_item(self,item):
        insert_sql = """
        insert into `special_db` (c_url,c_limit_year, c_level2_name, i_special_id, c_degree, i_rank_type, i_view_week, i_view_total, c_level3_name, c_name, i_rank, i_rankall, c_id, c_spcode, i_level1, i_level3, c_level1_name, i_view_month, i_level2)
values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);
        """
        values = (item['c_url'],item['c_limit_year'],item['c_level2_name'],item['i_special_id'],item['c_degree'],item['i_rank_type'],item['i_view_week'],item['i_view_total'],item['c_level3_name'],item['c_name'],item['i_rank'],item['i_rankall'],item['c_id'],item['c_spcode'],item['i_level1'],item['i_level3'],item['c_level1_name'],item['i_view_month'],item['i_level2'])
        self.cursor.execute(insert_sql,values)
        self.connect.commit()
        pass
    
    def process_school_update(self,item):
        i_school_id = item['i_school_id']
        
        i_view_month = item['i_view_month']
        c_view_total = item['c_view_total']
        i_view_total_number = item['i_view_total_number']
        i_view_week = item['view_week']

        update_sql = """
        update guokao_db.school_tb
set i_view_month = %s , c_view_total = %s , i_view_total_number = %s, i_view_week = %s
where c_school_id = %s;
        """
        values = (i_view_month,c_view_total,i_view_total_number,i_view_week,i_school_id)
        self.cursor.execute(update_sql,values)
        self.connect.commit()
        pass

    def process_school_item(self,item):

        insert_sql = """
insert into `school_tb`(c_school_id, c_data_code, c_type, c_school_type, c_school_nature, c_level, c_code_enroll, c_f985,
                        c_f211, c_department, c_admissions, c_central, c_dual_class, c_is_seal, c_num_subject, c_num_master,
                        c_num_doctor, c_num_academician, c_num_library, c_num_lab, c_province_id, c_city_id, c_county_id,
                        c_is_ads, c_is_recruitment, c_create_date, c_area, c_old_name, c_status, c_add_id, c_update_id,
                        c_ad_level, c_e_pc, c_e_app, c_ruanke_rank, c_colleges_level, c_doublehigh, c_wsl_rank, c_qs_rank,
                        c_xyh_rank, c_is_sell, c_postcode, c_name, c_belong, c_short, c_single, c_logo, c_level_name,
                        c_type_name, c_school_type_name, c_school_nature_name, c_dual_class_name, c_single_province,
                        c_province_name, c_city_name, c_town_name, c_weiwangzhan, c_yjszs, c_xiaoyuan, c_email, c_school_email,
                        c_address, c_site, c_school_site, c_phone, c_school_phone, c_content, t_add_time, t_update_time)
values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,
        %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """

        values = (item['c_school_id'],item['c_data_code'],item['c_type'],item['c_school_type'],item['c_school_nature'],item['c_level'],item['c_code_enroll'],item['c_f985'],item['c_f211'],item['c_department'],item['c_admissions'],item['c_central'],item['c_dual_class'],item['c_is_seal'],item['c_num_subject'],item['c_num_master'],item['c_num_doctor'],item['c_num_academician'],item['c_num_library'],item['c_num_lab'],item['c_province_id'],item['c_city_id'],item['c_county_id'],item['c_is_ads'],item['c_is_recruitment'],item['c_create_date'],item['c_area'],item['c_old_name'],item['c_status'],item['c_add_id'],item['c_update_id'],item['c_ad_level'],item['c_e_pc'],item['c_e_app'],item['c_ruanke_rank'],item['c_colleges_level'],item['c_doublehigh'],item['c_wsl_rank'],item['c_qs_rank'],item['c_xyh_rank'],item['c_is_sell'],item['c_postcode'],item['c_name'],item['c_belong'],item['c_short'],item['c_single'],item['c_logo'],item['c_level_name'],item['c_type_name'],item['c_school_type_name'],item['c_school_nature_name'],item['c_dual_class_name'],item['c_single_province'],item['c_province_name'],item['c_city_name'],item['c_town_name'],item['c_weiwangzhan'],item['c_yjszs'],item['c_xiaoyuan'],item['c_email'],item['c_school_email'],item['c_address'],item['c_site'],item['c_school_site'],item['c_phone'],item['c_school_phone'],item['c_content'],item['t_add_time'],item['t_update_time'])

        self.cursor.execute(insert_sql,values)
        self.connect.commit()
        pass

    def close(self):
        self.cursor.close()
        self.connect.close()

    def selelct_school_id_list(self):
        # SQL 查询语句
        select_sql = """
        select c_school_id from school_tb;
        """
        id_str_list = []
        try:
            self.cursor.execute(select_sql)
            results = self.cursor.fetchall()
            for row in results:
                id = row[0]
                id_str_list.append(id)
            return id_str_list
        except:
            print("错误")
        pass



class SchoolPipeline(object):
    def process_item(self, item, spider):
        db = db_conntect()
        db.process_school_item(item)
        db.close()
        return item

class SpecialPipeline(object):
    def process_item(self, item, spider):
        db = db_conntect()
        db.process_special_item(item)
        db.close()
        return item

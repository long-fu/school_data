import scrapy
import json
import time
from school.items import SchoolItem


class SchoolSpider(scrapy.Spider):
    name = 'school'
    # allowed_domains = ['eol.cn']
    start_urls = []


    root_url = 'https://api.eol.cn/gkcx/api/?access_token=&admissions=&central=&department=&dual_class=&f211=&f985=&is_dual_class=&keyword=&page={0}&province_id=&request_type=1&school_type=&signsafe=&size=20&sort=view_total&type=&uri=apigkcx/api/school/hotlists'
    
    def __init__(self):
        # 第一次循环爬取
        for i in range(1,148):
            url = self.root_url.format(i)
            print("爬取",url)
            self.start_urls.append(url)
            pass
        
        pass

 
    def parse(self, response):
        json_str = response.text
        json_obj = json.loads(json_str)
        if json_obj['code'] != '0000':
            print("数据错误", json_obj['message'])
            return 
        
        item = SchoolItem()
        json_obj = json_obj['data']
        item['c_school_id'] = str(json_obj['school_id'])
        item['c_data_code'] = str(json_obj['data_code'])
        item['c_type'] = str(json_obj['type'])
        item['c_school_type'] = str(json_obj['school_type'])
        item['c_school_nature'] = str(json_obj['school_nature'])
        item['c_level'] = str(json_obj['level'])
        item['c_code_enroll'] = str(json_obj['code_enroll'])
        item['c_f985'] = str(json_obj['f985'])
        item['c_f211'] = str(json_obj['f211'])
        item['c_department'] = str(json_obj['department'])
        item['c_admissions'] = str(json_obj['admissions'])
        item['c_central'] = str(json_obj['central'])
        item['c_dual_class'] = str(json_obj['dual_class'])
        item['c_is_seal'] = str(json_obj['is_seal'])
        item['c_num_subject'] = str(json_obj['num_subject'])
        item['c_num_master'] = str(json_obj['num_master'])
        item['c_num_doctor'] = str(json_obj['num_doctor'])
        item['c_num_academician'] = str(json_obj['num_academician'])
        item['c_num_library'] = json_obj['num_library']
        item['c_num_lab'] = str(json_obj['num_lab'])
        item['c_province_id'] = str(json_obj['province_id'])
        item['c_city_id'] = str(json_obj['city_id'])
        item['c_county_id'] = str(json_obj['county_id'])
        item['c_is_ads'] = str(json_obj['is_ads'])
        item['c_is_recruitment'] = str(json_obj['is_recruitment'])
        item['c_create_date'] = str(json_obj['create_date'])
        item['c_area'] = str(json_obj['area'])
        item['c_old_name'] = str(json_obj['old_name'])
        item['c_status'] = str(json_obj['status'])
        item['c_add_id'] = str(json_obj['add_id'])
        item['c_update_id'] = json_obj['update_id']
        item['c_ad_level'] = str(json_obj['ad_level'])
        item['c_e_pc'] = str(json_obj['e_pc'])
        item['c_e_app'] = str(json_obj['e_app'])
        item['c_ruanke_rank'] = str(json_obj['ruanke_rank'])
        item['c_colleges_level'] = json_obj['colleges_level']
        item['c_doublehigh'] = str(json_obj['doublehigh'])
        item['c_wsl_rank'] = str(json_obj['wsl_rank'])
        item['c_qs_rank'] = str(json_obj['qs_rank'])
        item['c_xyh_rank'] = str(json_obj['xyh_rank'])
        item['c_is_sell'] = str(json_obj['is_sell'])
        item['c_postcode'] = str(json_obj['postcode'])
        item['c_name'] = str(json_obj['name'])
        item['c_belong'] = str(json_obj['belong'])
        item['c_short'] = str(json_obj['short'])
        item['c_single'] = str(json_obj['single'])
        item['c_logo'] = str(json_obj['logo'])
        item['c_level_name'] = str(json_obj['level_name'])
        item['c_type_name'] = str(json_obj['type_name'])
        item['c_school_type_name'] = str(json_obj['school_type_name'])
        item['c_school_nature_name'] = str(json_obj['school_nature_name'])
        item['c_dual_class_name'] = str(json_obj['dual_class_name'])
        item['c_single_province'] = str(json_obj['single_province'])
        item['c_province_name'] = str(json_obj['province_name'])
        item['c_city_name'] = str(json_obj['city_name'])
        item['c_town_name'] = str(json_obj['town_name'])
        item['c_weiwangzhan'] = str(json_obj['weiwangzhan'])
        item['c_yjszs'] = str(json_obj['yjszs'])
        item['c_xiaoyuan'] = str(json_obj['xiaoyuan'])
        item['c_email'] = str(json_obj['email'])
        item['c_school_email'] = str(json_obj['school_email'])
        item['c_address'] = str(json_obj['address'])
        item['c_site'] = str(json_obj['site'])
        item['c_school_site'] = str(json_obj['school_site'])
        item['c_phone'] = str(json_obj['phone'])
        item['c_school_phone'] = str(json_obj['school_phone'])
        item['c_content'] = str(json_obj['content'])
        
        add_time_str = json_obj['add_time']
        add_time = time.strptime(add_time_str, "%Y-%m-%d %H:%M:%S")
        # print("添加数据", add_time)
        item['t_add_time'] = add_time

        update_time_str = json_obj['update_time']
        update_time = time.strptime(update_time_str, "%Y-%m-%d %H:%M:%S")
        # print("更新数据", update_time)
        item['t_update_time'] = update_time

        yield item
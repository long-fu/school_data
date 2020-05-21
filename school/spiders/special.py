# -*- coding: utf-8 -*-
import scrapy
import json
from school.items import SpecialItem

class SpecialSpider(scrapy.Spider):
    name = 'special'
    # allowed_domains = ['https://api.eol.cn/gkcx/api/']
    start_urls = []
    root_url = 'https://api.eol.cn/gkcx/api/?access_token=&keyword=&level1=&level2=&page={0}&signsafe=&size=20&uri=apidata/api/gk/special/lists'

    def __init__(self):
        # print("开始1111111")
        for i in range(0,74):
            url = self.root_url.format(i)
            self.start_urls.append(url)
        pass

    # def start_requests(self):
    #     # print("发送请求",self.start_urls)
    #     for url in self.start_urls:
    #         # print("发送请求",url)
    #         yield scrapy.FormRequest(url=url)
    #     pass

    def parse(self, response):
        
        res_str = response.text
        json_obj = json.loads(res_str)
        url = response.text.url
        if json_obj['code'] != '0000':
            return
        json_obj = json_obj["data"]["item"]
        print("当前地址",url)
        for json_item in json_obj:
            item = SpecialItem()
            item['c_url'] = url
            item['c_limit_year'] = json_item['limit_year']
            item['c_level2_name'] = json_item['level2_name']
            item['i_special_id'] = json_item['special_id']
            item['c_degree'] = json_item['degree']
            item['i_rank_type'] = json_item['rank_type']
            item['i_view_week'] = json_item['view_week']
            item['i_view_total'] = json_item['view_total']
            item['c_level3_name'] = json_item['level3_name']
            item['c_name'] = json_item['name']
            item['i_rank'] = json_item['rank']
            item['i_rankall'] = json_item['rankall']
            item['c_id'] = json_item['id']
            item['c_spcode'] = json_item['spcode']
            item['i_level1'] = json_item['level1']
            item['i_level3'] = json_item['level3']
            item['c_level1_name'] = json_item['level1_name']
            item['i_view_month'] = json_item['view_month']
            item['i_level2'] = json_item['level2']
            yield item
            pass

        

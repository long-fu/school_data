# -*- coding: utf-8 -*-
import scrapy
import json
from school.items import LineproItem

class LineproSpider(scrapy.Spider):
    name = 'linepro'
    # allowed_domains = ['linepro.cn']
    start_urls = []
    root_url = "https://api.eol.cn/gkcx/api/?access_token=&page=1&province_id={0}&signsafe=&size=100&uri=apidata/api/gk/score/proprovince&year={1}"
    _count_int = 0
    def __init__(self):
        province_id_list = [65,64,63,62,61,54,53,52,51,50,46,45,44,43,42,41,37,36,35,34,33,32,31,23,22,21,15,14,13,12,11]
        for i in province_id_list:
            for y in range(2014,2020):
                url = self.root_url.format(i,y)
                print("需要爬取的地址",url)
                self.start_urls.append(url)
                pass
        pass

    def parse(self, response):
        text = response.text
        json_obj = json.loads(text)
        if json_obj['code'] != '0000':
            print('数据错误', json_obj['message'])
            return
        self._count_int = self._count_int + json_obj['data']['numFound']
        for json_item in json_obj['data']['item']:
            item = LineproItem()
            item['c_id'] = json_item['id']
            item['i_average'] = json_item['average']
            item['c_local_batch_name'] = json_item['local_batch_name']
            item['c_local_province_name'] = json_item['local_province_name']
            item['c_local_type_name'] = json_item['local_type_name']
            item['i_year'] = json_item['year']
            yield item
        print("总共多少条数据",self._count_int)


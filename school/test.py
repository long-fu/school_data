from pipelines import db_conntect

if __name__ == "__main__":
    db = db_conntect()
    id_str_list = db.selelct_school_id_list()
    id_int_list = map(lambda item: int(item), id_str_list)
    id_int_list = list(id_int_list)
    # print("获取到所有的id_",id_str_list,list(id_int_list))
    id_int_list.sort()
    print(id_int_list)
    j = 30
    filter_int_list = []
    for i in range(len(id_int_list)):
        if i == len(id_int_list) - 1:
            break
            
        val = id_int_list[i + 1] - id_int_list[i]
        if val == 0:
            pass
        else:
            for j in range(1, val):
                filter_int_list.append(id_int_list[i] + j)
                pass
            pass
        pass
    print("找出所有的数据", filter_int_list,len(filter_int_list))

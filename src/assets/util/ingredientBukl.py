import csv
import json
from json import JSONEncoder
from appwrite.client import Client
from appwrite.services.users import Users
from appwrite.services.database import Database

client = Client()

(client
  .set_endpoint('https://localhost/v1') # Your API Endpoint
  .set_project('626c434b76c24b1a2601') # Your project ID
  .set_key('...') # Your secret API key
  .set_self_signed(True)
)
database = Database(client)
#group = {}
#ingredients=[]
class Ingredient:
    def __init__(self, name, description,subgroup):
        self.name = name
        self.description = description
        self.subgroup = subgroup
class Group:
    def __init__(self, name, color,ingredients):
        self.name = name
        self.color = color
        self.ingredients = ingredients
class EmployeeEncoder(JSONEncoder):
    def default(self, o):
        return o.__dict__
group ={}
ingredients=[]
with open('Food.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            ing=Ingredient(row[1],row[3],row[12])
            ingredients.append(ing)
            print( EmployeeEncoder().encode(ing))
            result = database.create_document('6272ab8d74fab2a07023', 'unique()', EmployeeEncoder().encode(ing))
            #aspetto l'id indietro
            if(row[11] not in group):
                group[row[11]]=Group(row[11],"#FFFFFF",[])
            group[row[11]].ingredients.append(result["$id"])
            print(f'\t{row[1]} is in the group {row[11]} and subgroup {row[12]}.')
            line_count += 1
    print(f'Processed {line_count} lines.')
    #print('groups:')
#    for k,v in group.items():
#        employeeJSONData = json.dumps(v, indent=4, cls=EmployeeEncoder)
#        print(employeeJSONData)
    print("provo a scrivere il primo ingrediente nel db")


#result = database.create_document('6272ab8d74fab2a07023', 'unique()', EmployeeEncoder().encode(ingredients[0]))
#print(EmployeeEncoder().encode(list(group.values())[0]))
for v in group.values():
    result = database.create_document('6272aae5aab5e5273927', 'unique()', EmployeeEncoder().encode(v))

    
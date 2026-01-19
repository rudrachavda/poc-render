
# poc-render

Notes:
- Create some new components, add the attribute adder from before in poc-csv-render, add more dimensions however, and with the more dimensions you add, the more complex the graphs get, with the final graph being the dot graph with everything connected. 

The graphs should show automatically from the attributes


Requirements:

So what I understand:

1. Research if JSON formats are different for diff types of graphs

2. Do a protoype , with 3 diff views ... based on Customer , Store, product and sales

 S001   ST0001. C00001    P00001.   100.00.  1 Jul

 sale, store, customer, product, value, date


Components:

Now --> (New Skeleton): 

Components {
    Sidebar {
        Buttons {
            Format of Json {
                Views {
                    - Customer
                    - Store
                    - Product/Sales
                }
            }

    Chart {
        - 3 renders for different graphs
    }

        }

    }


}
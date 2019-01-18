#include <iostream>
#include <vector>
using namespace std;

int main() {

    //Start taking inputs
    int num_test_cases =0;
    vector< vector<int> > input;
    while(true){
        cin>>num_test_cases;
        if(num_test_cases==0)
            break;
        vector<int> no_workshop;
        no_workshop.push_back(num_test_cases);
        input.push_back(no_workshop);
        for(int i=0;i<num_test_cases;i++){
            vector<int> temp;
            int num_elements;
            cin>>num_elements;
            temp.push_back(num_elements);
            for(int j=0;j<num_elements;j++){
                int cost_price;
                cin>>cost_price;
                temp.push_back(cost_price-10);
            }
            input.push_back(temp);
        }
    }
    //Input Done
    int first_dim_size = input.size();
    //calculating for 1-D
    vector<int> profit;
    int highestProfit = -200;

    

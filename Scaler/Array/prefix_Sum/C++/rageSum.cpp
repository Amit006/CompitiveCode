vector<long long> Solution::rangeSum(vector<int> &A, vector<vector<int> > &B) {
 int n = A.size();
 int q = B.size();

 long long  prefix[n];

 prefix[0] = A[0];
 for(int i = 1; i < n; i++ ){
    prefix[i] = prefix[i-1]+ A[i];
 }

 vector<long long> ansArray;

 for(int i=0; i<q; i++){
     int upperLimit = B[i][1];
     int lowerLimit = B[i][0];
     if(lowerLimit==0){
        ansArray.push_back(prefix[upperLimit]);
     } else ansArray.push_back(prefix[upperLimit] - prefix[lowerLimit-1]);
 }
 return ansArray;

}
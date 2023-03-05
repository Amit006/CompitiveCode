vector<long long> Solution::rangeSum(vector<int> &A, vector<vector<int> > &B) {
 int n = A.size();
 int q = B.size();
 long long  prefixSum[n];

 int maxRage = B[0][1];
 int lowRange = B[0][0];
 prefixSum[0] = A[0];

 for(int i=1; i <= maxRage; i++) prefixSum[i] = prefixSum[i-1]+ A[i];
 
 vector<long long> ansArray;
 ansArray.push_back(prefixSum[maxRage] - (lowRange ? prefixSum[lowRange-1]: lowRange));
 for(int i=1; i < q; i++){
      int upperLimit = B[i][1];
      int lowerLimit = B[i][0];
      if(upperLimit >  maxRage){
        for(int l = maxRage+1; l <= upperLimit; l++){
            prefixSum[l] = prefixSum[l-1] + A[l];
        }
        ansArray.push_back(prefixSum[upperLimit] -  (lowerLimit ? prefixSum[lowerLimit-1]: lowerLimit));
        maxRage = upperLimit;
      } else ansArray.push_back(prefixSum[upperLimit] - (lowerLimit ? prefixSum[lowerLimit-1] : lowerLimit));
 }

 return ansArray;
}

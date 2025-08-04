export const fetchAllFeatures = async () => {
    const response = await fetch('/api/getPricesData', {
      method: 'GET',
      headers: {
          'x-api-token': process.env.NEXT_PUBLIC_API_SECRET_TOKEN,
      },
  })
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    
    // Destructure the features into variables
    const {
      allFeatures,
      userFeaturesAddonsData,
      serverFeaturesAddonsData,
      branchFeaturesAddonsData
    } = data;
  
    return {
      allFeatures,
      userFeaturesAddonsData,
      serverFeaturesAddonsData,
      branchFeaturesAddonsData
    };
  };
  
  

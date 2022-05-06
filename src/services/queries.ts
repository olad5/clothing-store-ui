export const categoriesQuery = (): { query: string } => {
  let queryString = {
    query: `
        {
          categories {
            name
          }
        }
`,
  };

  return queryString;
};

export const currenciesQuery = (): { query: string } => {
  let queryString = {
    query: `
        {
          currencies {
              label
              symbol
            }
        }
      `,
  };

  return queryString;
};

export const categoryProductsQuery = (variables: {
  title: string;
}): { query: string } => {
  let queryString = {
    query: `
       query getCategoryItems($category: CategoryInput){
          category(input: $category) {
            products {
              id
              name
              inStock
              gallery
              prices {
                currency {
                  symbol
                }
                amount
              }
            }
          }
        }
      `,
    variables: {
      category: variables,
    },
  };

  return queryString;
};

export const singleProductQuery = (variables: {
  productId: string;
}): { query: string } => {
  let queryString = {
    query: `
      query getSingleProduct($productId: String!) {
        product(id: $productId) {
          id
          name
          inStock
          gallery
          description
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              symbol
            }
            amount
          }
          brand
        }
      }

      `,
    variables,
  };

  return queryString;
};

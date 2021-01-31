let link = 'https://demo.api-platform.com/books';

export const getBooks = async(page) => {
  let url = `${link}?page=${page}`;

  try {
    let raw = await fetch(url);
    let res = await raw.json();

    if (res['hydra:member']){
      result = res['hydra:member'];
    }
  } catch (err){
    console.log('err',err);
  }

  return result;
}


export const addBookRequest = async(payload) => {
  let response;
  let config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  }

  try {
    let result = await fetch(link, config);
    response = result.status;
  } catch(err){
    response = 400;
  }

  switch (response){
    case 201:
      return 'Code 201: Book resource created';
    case 400:
      return 'Code 400: Invalid input';
    case 404:
      return 'Code 404: Resource not found';
    case 500:
      return 'Code 500: Internal Server Error';
    default:
      return 'Uncaught error';
  }
}

export const editBookRequest = async(id,payload) => {
  let link = `${link}/${id}`;
  let response;
  let config = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  }

  try {
    let result = await fetch(link, config);
    response = result.status;
  } catch(err){
    response = 400;
  }  

  switch (response){
    case 201:
      return 'Code 201: Book resource updated';
    case 400:
      return 'Code 400: Invalid input';
    case 404:
      return 'Code 404: Resource not found';
    case 500:
      return 'Code 500: Internal Server Error';
    default:
      return 'Uncaught error';
  }
}
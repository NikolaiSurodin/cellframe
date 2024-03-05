import { ref } from 'vue'
export function useFetchData( itemName, length ) {
  const data = ref( [] )

  for ( let i = 0; i < length; i++ ) {
    data.value.push( {
      id: i + 1,
      name: `${ itemName }_core-t.${ i }`
    } )
  }
  return { data }
}
import cats from '../data/cats'
import dogs from '../data/dogs'

// data below will be the default data we can pull into any component that we want
export default {
  cats,
  dogs,
    // the ... in the below array makes the array flat (not nested array)
  pets: [...cats, ...dogs]
}

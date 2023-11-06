/**
 * Queries can be sent as an HTTP GET request:
 */
import { gql, GraphQLClient } from '../src/index.js'

const endpoint = `https://10.10.100.3/dkp/kommander/dashboard/graphql`

const graphQLClient = new GraphQLClient(endpoint, {
  method: `GET`,
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
})

const query = gql`
  query {
    	"query Clusters($workspaceId: String) {\n capabilities {\n action\n possible\n __typename\n }\n workspaces(id: $workspaceId) {\n nodes {\n id\n displayName\n clusters {\n capabilities {\n ...DefaultCapability\n __typename\n }\n nodes {\n ...ClusterCardViewData\n __typename\n }\n __typename\n }\n __typename\n }\n __typename\n }\n uiSettings {\n resourceWarnings {\n ...ResourceWarning….ResourcesWithConfig\n __typename\n }\n mem {\n ...ResourcesWithConfig\n __typename\n }\n disk {\n ...ResourcesWithConfig\n __typename\n }\n __typename\n}\n\nfragment ResourcesWithConfig on ResourceWarning {\n limits {\n ...ResourceConfig\n __typename\n }\n requests {\n ...ResourceConfig\n __typename\n }\n usage {\n ...ResourceConfig\n __typename\n }\n __typename\n}\n\nfragment ResourceConfig on ResourceWarningConfig {\n enabled\n min\n max\n __typename\n}"
  }
`
//query	"query Clusters($workspaceId: String) {\n capabilities {\n action\n possible\n __typename\n }\n workspaces(id: $workspaceId) {\n nodes {\n id\n displayName\n clusters {\n capabilities {\n ...DefaultCapability\n __typename\n }\n nodes {\n ...ClusterCardViewData\n __typename\n }\n __typename\n }\n __typename\n }\n __typename\n }\n uiSettings {\n resourceWarnings {\n ...ResourceWarning….ResourcesWithConfig\n __typename\n }\n mem {\n ...ResourcesWithConfig\n __typename\n }\n disk {\n ...ResourcesWithConfig\n __typename\n }\n __typename\n}\n\nfragment ResourcesWithConfig on ResourceWarning {\n limits {\n ...ResourceConfig\n __typename\n }\n requests {\n ...ResourceConfig\n __typename\n }\n usage {\n ...ResourceConfig\n __typename\n }\n __typename\n}\n\nfragment ResourceConfig on ResourceWarningConfig {\n enabled\n min\n max\n __typename\n}"


const variables = {
  title: `Inception`,
}

const data = await graphQLClient.request(query, variables)
console.log(data)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_swee_list = createAsyncThunk(
  "swees/api_v1_swee_list",
  async payload => {
    const response = await apiService.api_v1_swee_list(payload)
    return response.data
  }
)
export const api_v1_swee_create = createAsyncThunk(
  "swees/api_v1_swee_create",
  async payload => {
    const response = await apiService.api_v1_swee_create(payload)
    return response.data
  }
)
export const api_v1_swee_retrieve = createAsyncThunk(
  "swees/api_v1_swee_retrieve",
  async payload => {
    const response = await apiService.api_v1_swee_retrieve(payload)
    return response.data
  }
)
export const api_v1_swee_update = createAsyncThunk(
  "swees/api_v1_swee_update",
  async payload => {
    const response = await apiService.api_v1_swee_update(payload)
    return response.data
  }
)
export const api_v1_swee_partial_update = createAsyncThunk(
  "swees/api_v1_swee_partial_update",
  async payload => {
    const response = await apiService.api_v1_swee_partial_update(payload)
    return response.data
  }
)
export const api_v1_swee_destroy = createAsyncThunk(
  "swees/api_v1_swee_destroy",
  async payload => {
    const response = await apiService.api_v1_swee_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sweesSlice = createSlice({
  name: "swees",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_swee_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swee_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swee_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swee_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swee_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swee_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swee_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swee_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_swee_list,
  api_v1_swee_create,
  api_v1_swee_retrieve,
  api_v1_swee_update,
  api_v1_swee_partial_update,
  api_v1_swee_destroy,
  slice: sweesSlice
}

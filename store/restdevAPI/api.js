import axios from "axios"
const restdevAPI = axios.create({
  baseURL: "https://rest3-dev-110540.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return restdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return restdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return restdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_swee_list(payload) {
  return restdevAPI.get(`/api/v1/swee/`)
}
function api_v1_swee_create(payload) {
  return restdevAPI.post(`/api/v1/swee/`, payload)
}
function api_v1_swee_retrieve(payload) {
  return restdevAPI.get(`/api/v1/swee/${payload.id}/`)
}
function api_v1_swee_update(payload) {
  return restdevAPI.put(`/api/v1/swee/${payload.id}/`, payload)
}
function api_v1_swee_partial_update(payload) {
  return restdevAPI.patch(`/api/v1/swee/${payload.id}/`, payload)
}
function api_v1_swee_destroy(payload) {
  return restdevAPI.delete(`/api/v1/swee/${payload.id}/`)
}
function modules_articles_article_list(payload) {
  return restdevAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return restdevAPI.post(`/modules/articles/article/`, payload)
}
function modules_articles_article_retrieve(payload) {
  return restdevAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return restdevAPI.put(`/modules/articles/article/${payload.id}/`, payload)
}
function modules_articles_article_partial_update(payload) {
  return restdevAPI.patch(`/modules/articles/article/${payload.id}/`, payload)
}
function modules_articles_article_destroy(payload) {
  return restdevAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function modules_two_factor_authentication_2fa_retrieve(payload) {
  return restdevAPI.get(`/modules/two-factor-authentication/2fa`)
}
function modules_two_factor_authentication_2fa_create(payload) {
  return restdevAPI.post(`/modules/two-factor-authentication/2fa`)
}
function modules_two_factor_authentication_twofactorauth_list(payload) {
  return restdevAPI.get(`/modules/two-factor-authentication/twofactorauth/`)
}
function modules_two_factor_authentication_twofactorauth_create(payload) {
  return restdevAPI.post(
    `/modules/two-factor-authentication/twofactorauth/`,
    payload
  )
}
function modules_two_factor_authentication_twofactorauth_retrieve(payload) {
  return restdevAPI.get(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`
  )
}
function modules_two_factor_authentication_twofactorauth_update(payload) {
  return restdevAPI.put(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`,
    payload
  )
}
function modules_two_factor_authentication_twofactorauth_partial_update(
  payload
) {
  return restdevAPI.patch(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`,
    payload
  )
}
function modules_two_factor_authentication_twofactorauth_destroy(payload) {
  return restdevAPI.delete(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`
  )
}
function modules_two_factor_authentication_twofactorauth_send_otp_create(
  payload
) {
  return restdevAPI.post(
    `/modules/two-factor-authentication/twofactorauth/send_otp/`,
    payload
  )
}
function modules_two_factor_authentication_verify_destroy(payload) {
  return restdevAPI.delete(
    `/modules/two-factor-authentication/verify/${payload.id}/`
  )
}
function rest_auth_login_create(payload) {
  return restdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return restdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return restdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return restdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return restdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return restdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return restdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return restdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return restdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return restdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return restdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_swee_list,
  api_v1_swee_create,
  api_v1_swee_retrieve,
  api_v1_swee_update,
  api_v1_swee_partial_update,
  api_v1_swee_destroy,
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  modules_two_factor_authentication_2fa_retrieve,
  modules_two_factor_authentication_2fa_create,
  modules_two_factor_authentication_twofactorauth_list,
  modules_two_factor_authentication_twofactorauth_create,
  modules_two_factor_authentication_twofactorauth_retrieve,
  modules_two_factor_authentication_twofactorauth_update,
  modules_two_factor_authentication_twofactorauth_partial_update,
  modules_two_factor_authentication_twofactorauth_destroy,
  modules_two_factor_authentication_twofactorauth_send_otp_create,
  modules_two_factor_authentication_verify_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

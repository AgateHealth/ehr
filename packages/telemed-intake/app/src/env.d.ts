/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_IS_LOCAL?: 'true' | 'false';
  readonly VITE_APP_CLIENT_ID: string;
  readonly VITE_APP_AUTH0_AUDIENCE: string;
  readonly VITE_APP_CONNECTION_NAME: string;
  readonly VITE_APP_FHIR_API_URL: string;
  readonly VITE_APP_PROJECT_API_URL: string;
  readonly VITE_APP_CHECK_IN_ZAMBDA_ID: string;
  readonly VITE_APP_CREATE_APPOINTMENT_ZAMBDA_ID: string;
  readonly VITE_APP_CANCEL_TELEMED_APPOINTMENT_ZAMBDA_ID: string;
  readonly VITE_APP_CANCEL_IN_PERSON_APPOINTMENT_ZAMBDA_ID: string;
  readonly VITE_APP_GET_PATIENTS_ZAMBDA_ID: string;
  readonly VITE_APP_UPDATE_APPOINTMENT_ZAMBDA_ID: string;
  readonly VITE_APP_GET_LOCATION_ZAMBDA_ID: string;
  readonly VITE_APP_GET_WAITING_ROOM_ZAMBDA_ID: string;
  readonly VITE_APP_JOIN_CALL_ZAMBDA_ID: string;
  readonly VITE_APP_GET_APPOINTMENTS_ZAMBDA_ID: string;
  readonly VITE_APP_GET_PAPERWORK_ZAMBDA_ID: string;
  readonly VITE_APP_CREATE_PAPERWORK_ZAMBDA_ID: string;
  readonly VITE_APP_UPDATE_PAPERWORK_ZAMBDA_ID: string;
  readonly VITE_APP_GET_PRESIGNED_FILE_URL_ZAMBDA_ID: string;
  readonly VITE_APP_MIXPANEL_TOKEN: string;
  readonly VITE_APP_SENTRY_DSN: string;
  readonly VITE_APP_VIDEO_CHAT_CREATE_INVITE_ZAMBDA_ID: string;
  readonly VITE_APP_VIDEO_CHAT_CANCEL_INVITE_ZAMBDA_ID: string;
  readonly VITE_APP_VIDEO_CHAT_LIST_INVITES_ZAMBDA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

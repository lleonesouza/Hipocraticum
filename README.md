# Hipocraticum
![](https://avatars1.githubusercontent.com/u/64392648?s=200&v=4)
### Features

- REST SmartContract [FHIR](https://www.hl7.org/fhir/index.html) API
- Fhir resources available: **Clinical**  , ~~**Diagnosis**~~, ~~**Medication**~~, ~~**Workflow**~~, ~~**Financial**~~
- Secure [Organization](https://www.hl7.org/fhir/organization.html) Token Authentication
- Secure [Patient](https://www.hl7.org/fhir/patient.html) Token Authentication

# Get Started

<!-- > Our Base Url End-Point: https://api.cryptohealth/ -->

## User:
| TYPE  | URL | DESCRIPTION |
| - | - | - |
| POST | /user/oauth/google  | Authenticates patient with google tokens |
| GET | /user | Gets user info |
| PUT | /user | Creates a user |
| DELETE | /user | Deletes a user |

## Organization:
| TYPE  | URL | DESCRIPTION |
| - | - | - |
| POST | /organization | Authenticates organizations tokens |
| GET | /organization | Gets the organization info |
| PUT | /organization | Creates a organization |
| DELETE | /organization | Deletes a organization |

## Patient:
| TYPE  | URL | DESCRIPTION |
| - | - | - |
| POST | /patient | Creates new patient |
| GET | /patient  | Gets a patient info |
| PUT | /patient | Updates a patient |
| POST | /patient/address | Creates new address for a patient |
| POST | /patient/contact | Creates new contact for a patient |
| POST | /patient/telecom | Creates a new telecom for a patient |

## Allergies:
| TYPE  | URL | DESCRIPTION |
| - | - | - |
| GET | /allergy  | Gets a patient allergy info |
| POST | /allergy | Creates a new allergy for a patient |
| PUT | /allergy | Updates a patient allergy |
| POST | /allergy/note | Creates a new patient allergy note |
| POST | /allergy/reaction | Creates a new patient allergy reaction |


# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License

MIT
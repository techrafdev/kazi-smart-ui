
/* 

    Search Service Provider
    Request Post
    Response -> A List of Service Providers filtered with the given Parameters i.e Location and Service Category
    Params -> {
        "location" : "location to search",
        "service_category" : "Machanic"
    }

*/


// Responce Example

let response = {
    status: 200,
    data: [
        {
            user_full_name: "Kelvin Rapahel Kingara",
            profile_id: 2,
            msisdn: "07891*******",
            user_profile_image: "url",
            location: "Location",
            service_category: "Mechanic",
            job_completed: 30,
            rating: 5
        },
        {
            user_full_name: "Kelvin Rapahel Kingara",
            profile_id: 2,
            msisdn: "07891*******",
            user_profile_image: "url",
            location: "Location",
            service_category: "Mechanic",
            date_completed: "Date",
            job_rating: 5
        }
    ]
}

/* 

    Get Active Service Providers, and clients Total
    Request Type -> Get
    Response -> Total Number of active service providers and Clients
    Fields -> total_active_service_providers, total_active_clients

*/


// Responce Example

let response = {
    status: 200,
    data: {
        total_active_service_providers: 1025,
        total_active_clients: 978,
    }
}



/* 
    Get Recent Jobs
    Request Type -> Get
    Response -> A list of Jobs Recently Done with service provider 
    Fields -> user_full_name, profile_id, user_profile_image, Location, service_category, date_completed, job_rating 

*/

// Responce Example

let response = {
    status: 200,
    data: [
        {
            user_full_name: "Kelvin Rapahel Kingara",
            profile_id: 2,
            msisdn: "07891*******",
            user_profile_image: "url",
            location: "Location",
            service_category: "Mechanic",
            date_completed: "Date",
            job_rating: 5
        },
        {
            user_full_name: "Kelvin Rapahel Kingara",
            profile_id: 2,
            msisdn: "07891*******",
            user_profile_image: "url",
            location: "Location",
            service_category: "Mechanic",
            date_completed: "Date",
            job_rating: 5
        }
    ]
}


/* 
    Get Featured Service Providers
    Request Type Get
    Response -> A list of Top 8 service Providers Ordered by their rating, number of jobs done.
    Fields -> profile_id, user_profile_image, user_full_name, user_profile_image, user_location, number_of_jobs_done, rating, user_service_category
*/

// Responce Example

let response = {
    status: 200,
    data: [
        {
            user_full_name: "Kelvin Rapahel Kingara",
            profile_id: 2,
            user_profile_image: "url",
            msisdn: "07891*******",
            user_location: "Location",
            user_service_category: "Mechanic",
            number_of_jobs_done: 30,
            rating: 5
        },
        {
            user_full_name: "Kelvin Rapahel Kingara",
            profile_id: 2,
            user_profile_image: "url",
            msisdn: "07891*******",
            user_location: "Location",
            user_service_category: "Mechanic",
            number_of_jobs_done: 30,
            rating: 5
        }
    ]
}


/* 
    Get Service Categories With the number of service providers
    Request Type Get
    Response -> A list of services Provided in the system.
    Fields -> service_name, service_category_id, number_of_service_providers
*/

let response = {
    status: 200,
    data: [
        {
            service_name: "Plumber",
            service_category_id: 2,
            number_of_service_providers: 200
        },
        {
            service_name: "Mechanic",
            service_category_id: 4,
            number_of_service_providers: 211
        }
    ]
}
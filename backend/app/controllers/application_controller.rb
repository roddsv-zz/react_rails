class ApplicationController < ActionController::API

before_action :cors_preflight_check
after_action :cors_set_access_control_headers

protected

def cors_set_access_control_headers
  headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
end

# If this is a preflight OPTIONS request, then short-circuit the
# request, return only the necessary headers and return an empty
# text/plain.

def cors_preflight_check
  if request.method == :options
    headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
  end
end

end

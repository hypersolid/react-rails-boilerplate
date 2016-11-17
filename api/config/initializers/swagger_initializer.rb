v1 = {
  api_extension_type: :json,
  api_file_path: 'public/api/v1/',
  base_path: 'http://api.somedomain.com',
  clean_directory: false,
  parent_controller: V1::RecordsController,
  attributes: {
    info: {
      'title' => 'Swagger Sample App',
      'description' => 'This is a sample description.',
      'termsOfServiceUrl' => 'http://helloreverb.com/terms/',
      'contact' => 'apiteam@wordnik.com',
      'license' => 'Apache 2.0',
      'licenseUrl' => 'http://www.apache.org/licenses/LICENSE-2.0.html'
    }
  }
}
Swagger::Docs::Config.register_apis('1.0' => v1)

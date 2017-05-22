require 'test_helper'

class Api::NotebooksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_notebooks_index_url
    assert_response :success
  end

  test "should get create" do
    get api_notebooks_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_notebooks_destroy_url
    assert_response :success
  end

end
